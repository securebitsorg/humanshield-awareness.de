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
  - title: Zustellung
    features:
      - Allowlisting-Generator für Exchange Online, Postfix, Proofpoint, Sophos und Barracuda
      - Zustell-Selbsttest über denselben Weg wie die Kampagne
      - Zustelldiagnose mit SMTP-Statuscodes je Empfänger
      - Greylisting-Erkennung ab drei vorübergehenden Ablehnungen
      - Prüfung von SPF, DMARC und Mehrfacheinträgen der Absenderdomain
      - Zustell-, keine Personenauswertung
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
  - title: Kampagnen-Preflight
    features:
      - Pflichtdialog vor jedem Start mit Empfängerzahl, Zeitpunkt und Befunden
      - Ruhezeiten, Sperrfenster und Cooldown je Person (Vorgabe 30 Tage)
      - Zeitzone je Instanz als IANA-Name, voreingestellt UTC
      - Risikoklasse der Köder-Themen an der Vorlage gepflegt
      - Vier-Augen-Freigabe bei hoher Risikoklasse, in der Datenbank abgesichert
      - Gruppenausschlüsse direkt im Dialog, wirksam beim Versand
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
      - Zwei-Faktor-Authentifizierung mit App oder E-Mail-Code und Backup-Codes
      - 2FA auf Wunsch verpflichtend – für alle oder nur für Administratoren
      - Audit-Log über Anmeldungen und Systemänderungen
  - title: Nachweiskette
    features:
      - Hash-Verkettung jedes Audit-Eintrags (SHA-256, lückenlose Position)
      - Kettenzustand im Dashboard, ein Bruch wird mit Position benannt
      - Nachweispaket als ZIP mit Manifest und zweisprachiger Prüfanleitung
      - Eigenständiges Prüfwerkzeug – eine Datei, nur Standardbibliothek
      - Eigene Aufbewahrungsfrist für Audit-Inhalte, Verkettung bleibt als Tombstone
      - Zugriff für Administratoren und Datenschutzbeauftragte
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
      - Signierte Offline-Update-Bundles (Ed25519) für abgeschottete Instanzen
      - Reproduzierbar baubar, mit min_version und Downgrade-Sperre
      - Eine .env im Bundle wird erzwungen abgewiesen
---

Die quelloffene Basis von SentryMail – kostenlos nutzbar und selbst hostbar.
Enthält alle Grundfunktionen für den Einstieg; Business und Enterprise bauen
darauf auf.
