/**
 * Erzeugt die Open-Graph-Vorschaubilder unter public/og/ (1200x630).
 *
 *   node scripts/generate-og-images.mjs
 *
 * Läuft bewusst NICHT im Build: die Bilder ändern sich nur, wenn Headline oder
 * Marke angepasst werden, und werden als fertige PNGs eingecheckt. So bleibt
 * der Cloudflare-Pages-Build schnell und ohne zusätzliche Abhängigkeit.
 *
 * Schrift: public/fonts/roboto.woff2 (variabel, wght 100–900) – dieselbe Datei,
 * die auch die Website ausliefert. Der Text wird über fontkitten in Pfade
 * umgewandelt, damit sharp/librsvg keine systemweit installierte Schrift
 * braucht. Beide Pakete stecken bereits in den Astro-Abhängigkeiten.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { create } from "fontkitten";
import sharp from "sharp";

const root = path.resolve(fileURLToPath(new URL("../", import.meta.url)));
const p = (...s) => path.join(root, ...s);

const W = 1200;
const H = 630;
const BG = "#17191f"; // --color-gray-900
const BRAND = "#f0591f"; // --color-brand-500
const MUTED = "#8c929e"; // --color-gray-400

/*
 * Nur die Regular-Schnittstelle steht zur Verfügung: getVariation() setzt eine
 * unkomprimierte SFNT-Quelle voraus und greift durch den WOFF2-Wrapper nicht.
 * Die Headline wird deshalb über eine Kontur in Füllfarbe verstärkt (boldPx) –
 * bei Displaygrößen ab ~40px optisch nicht von echtem Bold zu unterscheiden.
 */
const font = create(fs.readFileSync(p("public/fonts/roboto.woff2")));

/** Breite einer Textzeile in px bei gegebener Schriftgröße. */
function measure(text, size) {
  const scale = size / font.unitsPerEm;
  let w = 0;
  for (const g of font.glyphsForString(text)) w += g.advanceWidth * scale;
  return w;
}

/**
 * Textzeile als SVG-<path>-Gruppe. Glyphen liegen im Font-Koordinatensystem
 * (y nach oben), daher die Spiegelung über scale(1,-1) in der Transformation.
 * boldPx wird in Font-Einheiten umgerechnet, weil die Kontur mitskaliert wird.
 */
function textPaths(text, { x, y, size, fill, boldPx = 0 }) {
  const scale = size / font.unitsPerEm;
  const stroke = boldPx
    ? ` stroke="${fill}" stroke-width="${(boldPx / scale).toFixed(1)}" stroke-linejoin="round"`
    : "";
  const parts = [];
  let cursor = 0;
  for (const g of font.glyphsForString(text)) {
    const d = g.path.toSVG();
    if (d) {
      parts.push(
        `<path d="${d}" fill="${fill}"${stroke} transform="translate(${(x + cursor).toFixed(2)} ${y.toFixed(2)}) scale(${scale.toFixed(6)} ${(-scale).toFixed(6)})"/>`,
      );
    }
    cursor += g.advanceWidth * scale;
  }
  return parts.join("");
}

/** Wörter auf Zeilen umbrechen, die maxWidth nicht überschreiten. */
function wrap(text, size, maxWidth) {
  const lines = [];
  let line = "";
  for (const word of text.split(" ")) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && measure(candidate, size) > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

const logo = fs.readFileSync(p("public/brand/logo-lockup-light-transparent.png"));

async function render({ file, headline, subline }) {
  const PAD = 80;
  const maxWidth = W - PAD * 2;

  // Headline so weit verkleinern, bis sie in höchstens drei Zeilen passt
  let size = 62;
  let lines = wrap(headline, size, maxWidth);
  while (lines.length > 3 && size > 40) {
    size -= 4;
    lines = wrap(headline, size, maxWidth);
  }

  const lineHeight = size * 1.2;
  // Textblock von unten setzen, damit die Subline unabhängig von der
  // Zeilenzahl immer denselben Abstand zur Markenlinie hält.
  const sublineBaseline = H - 92;
  const headlineBottom = sublineBaseline - 58;
  let svgText = "";
  lines.forEach((line, i) => {
    const y = headlineBottom - lineHeight * (lines.length - 1 - i);
    svgText += textPaths(line, {
      x: PAD,
      y,
      size,
      fill: "#ffffff",
      boldPx: size * 0.045,
    });
  });
  svgText += textPaths(subline, {
    x: PAD,
    y: sublineBaseline,
    size: 28,
    fill: MUTED,
  });

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="18%" cy="10%" r="85%">
      <stop offset="0%" stop-color="${BRAND}" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="${BRAND}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${svgText}
  <rect x="0" y="${H - 10}" width="${W}" height="10" fill="${BRAND}"/>
</svg>`;

  const logoW = 300;
  const resizedLogo = await sharp(logo).resize({ width: logoW }).toBuffer();

  await sharp(Buffer.from(svg))
    .composite([{ input: resizedLogo, left: PAD, top: 72 }])
    .png({ compressionLevel: 9 })
    .toFile(p("public", file));

  console.log(`✓ public/${file}  (${lines.length} Zeile(n) @ ${size}px)`);
}

/* Eine Karte je indexierbarer Seite und Sprache. Die Texte sind bewusst kurz
   gehalten – Social-Vorschauen werden oft klein gerendert. */
const CARDS = [
  {
    file: "og/default.png",
    headline: "Security Awareness, die wirkt",
    subline: "Made in Germany · DSGVO-konform · NIS2-ready",
  },
  {
    file: "og/funktionen.png",
    headline: "Phishing-Simulationen und Trainings in einem",
    subline: "Core kostenlos · Business- und Enterprise-Add-ons",
  },
  {
    file: "og/preise.png",
    headline: "Transparente Preise, gestaffelt nach Teamgröße",
    // 10 € = günstigstes Band (> 2.500 Mitarbeitende), siehe src/lib/pricing.ts
    subline: "Community kostenlos · Business ab 10 €/Mitarbeiter:in/Jahr",
  },
  {
    file: "og/nis2.png",
    headline: "NIS2-Schulungspflicht erfüllen und nachweisen",
    subline: "§ 30 und § 38 BSIG · Schulung, Simulation, Dokumentation",
  },
  {
    file: "og/open-source.png",
    headline: "Phishing-Simulation selbst hosten",
    subline: "Open Core · Ihre Daten bleiben in Ihrem Netz",
  },
  {
    file: "og/alternative.png",
    headline: "Der sachliche Anbietervergleich",
    subline: "Offene Preise · Self-Hosting · Open-Source-Kern",
  },
  {
    file: "og/en-default.png",
    headline: "Security awareness that works",
    subline: "Made in Germany · GDPR-compliant · NIS2-ready",
  },
  {
    file: "og/en-funktionen.png",
    headline: "Phishing simulations and training in one",
    subline: "Free core · Business and Enterprise add-ons",
  },
  {
    file: "og/en-preise.png",
    headline: "Transparent pricing, tiered by team size",
    subline: "Free community edition · Business from €10/employee/year",
  },
];

fs.mkdirSync(p("public/og"), { recursive: true });
for (const card of CARDS) await render(card);
