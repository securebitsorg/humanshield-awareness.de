---
name: Enterprise
tagline: Business plus Plattform, KI & SSO – als Upgrade (+40 %)
order: 2
highlighted: false
groups:
  - title: Darstellung & Automatisierung
    features:
      - White-Label mit App-Name, Akzentfarben und Logo, inkl. Login-Seite
      - Automatische und risikoabhängige Kampagnen
      - AI-Scoring der Human-Risk-Kennzahlen mit priorisierten Maßnahmen
      - Enterprise-Reporting mit Schulungsfortschritt und Zertifikatsstatus
  - title: Anbindung an bestehende Systeme
    features:
      - SAML Single Sign-On (ADFS, Entra ID, Keycloak, Okta …)
      - SIEM-Export an Splunk HEC, Elasticsearch, Microsoft Sentinel oder JSON
  - title: Nachweise gegenüber Dritten
    features:
      - Zeitstempel eines Dritten nach RFC 3161 auf den Kopf der Nachweiskette
      - Token unverändert gespeichert, extern prüfbar mit openssl ts -verify
      - Fehlgeschlagener Stempel wird als Anker mit Status „failed“ festgehalten
      - Befristeter Auditoren-Zugang, ausschließlich lesend und eigens protokolliert
      - Ablaufdatum ist Pflicht, der Datenschutzmodus gilt weiter
  - title: Schulungsmodul (LMS)
    features:
      - Pflichtschulungen mit Videos, self-hosted (Dateisystem oder S3/MinIO)
      - Automatische Kurszuweisung bei niedrigem Awareness-Score
      - Manipulationssicheres Fortschritts-Tracking
      - Verständnis-Quiz, serverseitig bewertet
      - Fristen mit Erinnerungen und Eskalation
      - Revisionssichere Schulungsnachweise als PDF mit Integritäts-Hash
      - SCORM-1.2-Import (Beta)
      - xAPI-1.0.3-Export an einen Learning Record Store
  - title: Analyse gemeldeter Mails
    features:
      - Automatische Auswertung mit SPF/DKIM/DMARC und erklärbarem Score
      - Entschärfte URLs und Anhang-Hashes
      - Wellen fassen gleichartige Meldungen zusammen
      - Anhang-Prüfung über ClamAV und YARA-Regeln
      - MISP-Anreicherung gegen eigene Threat-Intel
      - Nicht erreichbare Prüfer gelten als „nicht geprüft“
  - title: Wirksamkeit der eigenen Abwehr
    features:
      - Kontroll-Wirksamkeitstest misst, welche Schutzschicht was abfängt
      - Acht Stufen von Anzeigenamen-Spoofing bis HTML-Smuggling
      - Ausschließlich an ein eigenes Testpostfach, serverseitig erzwungen
      - Bewusst harmlose Nutzlasten – EICAR statt Schadsoftware
      - „blockiert“ ist das gute Ergebnis, ein IMAP-Problem nie ein Testergebnis
      - BSI-Zuordnung je Stufe (APP.5.3.A4, APP.5.3.A5, NET.1.1.A3)
  - title: Meldepflichten
    features:
      - NIS2-Meldeassistent mit Fristen-Uhr (24 h, 72 h, ein Monat) ab Kenntnis
      - Keine automatische Übermittlung – die Ausgabe ist ein Entwurf
      - Geführte Checkliste ohne Rechtsberatung, Hinweis in jeder Ausgabe
      - Begründungspflicht in beide Richtungen, auch gegen eine Meldung
      - DSGVO-Strang parallel mit eigener Uhr und anderem Adressaten (Art. 33)
      - Eskalation an benannte Rollen mit Vertretung, je Stufe genau einmal
  - title: Reaktion
    features:
      - Massen-Quarantäne über Microsoft Graph oder Postfix/Dovecot
      - Suche nur über die Message-ID, Probelauf zwingend
      - Es wird nur verschoben, nie gelöscht
  - title: Simulationen über weitere Kanäle
    features:
      - SMS über generisches HTTP-Gateway
      - Matrix und Nextcloud Talk als Direktnachricht
      - USB-Drop ohne Programm oder Skript
      - Nur dienstliche Endgeräte
---

Das Enterprise-Add-on ist ein Upgrade auf Business – kein eigenständiges
Add-on. Es kostet einen festen Aufschlag von +40 % auf den Business-Preis und
enthält alle Business-Funktionen plus die folgenden Erweiterungen.
