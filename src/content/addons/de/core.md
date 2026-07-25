---
name: Core
tagline: Kostenlos, quelloffen und selbst gehostet
order: 0
highlighted: false
groups:
  - title: Vorlagen
    features:
      - HTML- oder Markdown-Editor mit Live-Vorschau
      - Personalisierungs-Variablen in Betreff, HTML und Text
      - Vorschau mit Beispieldaten
      - Anhänge manuell hinzufügen und mit der Kampagne versenden
  - title: Empfängergruppen
    features:
      - Wiederverwendbare Listen mit Position, Abteilung und Kritikalität
      - Befüllen per manueller Eingabe oder CSV
      - Kennzeichnung von Leitungsorganen (§ 38 BSIG)
  - title: Sending Profiles
    features:
      - SMTP-Profile mit Absender-Identität und Test-Mail
      - Anbieterunabhängig (IONOS, Hetzner, Mailgun, SES, Postmark …)
      - Globales Fallback-SMTP ohne eigenes Profil
  - title: Landing Pages
    features:
      - Ziel-Seiten als HTML oder Markdown
      - Daten-Capture, Passworterfassung und Weiterleitung
      - Formulare automatisch auf die Tracking-URL umgebogen
  - title: Kampagnen
    features:
      - Assistent aus Vorlage, Profil, Landing Page und Gruppen
      - Optionale Zeitplanung
      - Erneuter Lauf für unvollständig zugestellte Kampagnen
  - title: Tracking & Ergebnisse
    features:
      - Tracking-Token je Empfänger in Links und Zählpixel
      - Versand, Öffnung, Klick und Formulardaten mit Zeitpunkt
      - Ergebnisseite je Kampagne mit CSV-Export
      - Control-Center-Dashboard mit Risiko-Score (0–100, Ampel)
      - Human Risk Management über alle Kampagnen
      - Management Report mit Kampagnenvergleich
  - title: Benutzer & Rollen
    features:
      - Rollen Administrator, Datenschutzbeauftragter und Benutzer
      - Lokaler Login und optional OIDC/SSO (Authentik, Keycloak, Entra ID, Okta …)
      - Zwei-Faktor-Authentifizierung mit App oder E-Mail-Code
      - Audit-Log über Anmeldungen und Systemänderungen
  - title: Datenschutz & Mitbestimmung
    features:
      - Datenschutzmodus sperrt Einzelpersonen-Auswertungen
      - k-Anonymität für Gruppenauswertungen (Standard 5)
      - Vier-Augen-Freigabe zur befristeten Aufhebung
      - Aufbewahrungsfrist mit automatischer Anonymisierung
      - Client-Fingerprinting nur nach ausdrücklicher Freigabe
      - Vorlagen für Betriebsvereinbarung und Datenschutz
  - title: Betrieb
    features:
      - Docker Compose (rootless, gehärtet) mit Caddy und automatischem TLS
      - PostgreSQL und Redis, alle Daten bleiben in der eigenen Installation
      - Deutsch und Englisch, Light- und Dark-Mode
---

Die quelloffene Basis von SentryMail – kostenlos nutzbar und selbst hostbar.
Enthält alle Grundfunktionen für den Einstieg; Business und Enterprise bauen
darauf auf.
