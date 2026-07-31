/**
 * Hilfsfunktionen für strukturierte Daten (JSON-LD).
 *
 * Schema.org-Felder erwarten Fließtext, keine Auszeichnung. Die Antworten der
 * FAQ liegen aber als Markdown in src/content/faq/ – plainText() macht daraus
 * eine saubere Zeile für das FAQPage-Snippet.
 */

/**
 * BreadcrumbList für eine Unterseite: Startseite → aktuelle Seite. Google nutzt
 * das für die Pfadanzeige im Suchergebnis statt der nackten URL.
 */
export function breadcrumbLd(
  site: URL | undefined,
  homeName: string,
  homePath: string,
  pageName: string,
  pagePath: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeName,
        item: new URL(homePath, site).href,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: new URL(pagePath, site).href,
      },
    ],
  };
}

/** Markdown grob zu Fließtext reduzieren (Links, Betonung, Code, Umbrüche). */
export function plainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, "") // Codeblöcke
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // Bilder
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // Links → Linktext
    .replace(/[*_`>#]/g, "") // Betonung, Code, Zitat, Überschrift
    .replace(/\s+/g, " ")
    .trim();
}
