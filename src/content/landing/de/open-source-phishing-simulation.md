---
title: Open-Source-Phishing-Simulation selbst hosten
eyebrow: Open Source & Self-Hosting
metaTitle: "Phishing-Simulation: Open Source & selbst gehostet"
metaDesc: "Warum Awareness-Daten besonders schützenswert sind, was Self-Hosting einer Phishing-Simulation wirklich kostet und wie sich Open-Source-Tools von Open-Core-Plattformen unterscheiden."
intro: Wer geklickt hat, wer gemeldet hat, wer eine Pflichtschulung nicht abgeschlossen hat – Awareness-Plattformen sammeln Verhaltensdaten über Beschäftigte. Das ist ein guter Grund, sie nicht in eine fremde Cloud zu geben.
breadcrumb: Open Source & Self-Hosting
ogImage: open-source.png
ctaTitle: Kern kostenlos, Add-ons wenn Sie sie brauchen
ctaText: Starten Sie mit der Community-Edition auf eigener Hardware – und schalten Sie Business oder Enterprise frei, wenn Automatisierung und Compliance-Reporting dazukommen sollen.
faq:
  - question: Ist SentryMail vollständig Open Source?
    answer: Der Kern ist Open Source und kann kostenlos selbst gehostet werden. Business und Enterprise sind kommerzielle Add-ons – das Modell heißt Open Core. Sie können den Kern also prüfen und dauerhaft kostenlos betreiben, zahlen aber für Funktionen wie automatische Pflichtschulungen, SSO oder SIEM-Export.
  - question: Was unterscheidet SentryMail von Gophish?
    answer: "Gophish ist ein reines Phishing-Framework: es versendet Kampagnen und misst Klicks. SentryMail verbindet die Simulation mit Lerninhalten, Awareness-Score und Nachweisdokumentation – also dem Teil, den Compliance-Anforderungen wie NIS2 verlangen."
  - question: Welche Daten verlassen bei Self-Hosting mein Netz?
    answer: Beim Selbsthosten der Community-Edition keine. Business und Enterprise prüfen den Lizenzstatus gegen unseren Lizenzserver – dabei wird der Lizenzschlüssel validiert, keine Kampagnen- oder Personendaten übertragen.
  - question: Brauche ich für Self-Hosting eigene Admins?
    answer: Sie brauchen jemanden, der einen Container betreibt, TLS terminiert, Backups fährt und die Zustellbarkeit der Simulations-Mails sicherstellt. Für Teams ohne diese Kapazität ist eine gehostete Lösung meist die ehrlichere Rechnung.
---

## Warum Awareness-Daten heikel sind

Eine Phishing-Simulation erzeugt eine Datenspur, die es in sich hat: Sie zeigt
für jede einzelne Person, ob sie auf einen simulierten Angriff hereingefallen
ist. Aus Sicht des Datenschutzes ist das Verhaltensdatum von Beschäftigten –
und aus Sicht des Betriebsrats ein Thema, das ohne saubere Regelung schnell zur
Mitbestimmungsfrage wird.

Deshalb sind zwei Prinzipien wichtiger als jedes Feature:

1. **Pseudonymisierte Auswertung.** Kennzahlen auf Team- und Organisationsebene
   statt einer Rangliste der Klickenden. Wer eine Simulation zur
   Leistungskontrolle umbaut, verliert die Belegschaft – und handelt sich
   arbeitsrechtliche Probleme ein.
2. **Datenhoheit.** Je weniger die Daten wandern, desto kleiner die
   Angriffsfläche und der vertragliche Aufwand. Self-Hosting ist hier die
   radikalste Antwort: Es gibt keinen Auftragsverarbeiter, weil es keine
   Verarbeitung außer Haus gibt.

## Open Source ist nicht gleich Open Source

Der Begriff wird für sehr unterschiedliche Modelle verwendet. Die Unterschiede
sind praktisch relevant:

| Modell | Was Sie bekommen | Typischer Haken |
|---|---|---|
| **Vollständig Open Source** | Kompletter Funktionsumfang unter freier Lizenz | Betrieb, Inhalte und Support liegen bei Ihnen |
| **Open Core** | Freier, nutzbarer Kern; kommerzielle Add-ons | Für Automatisierung und Compliance zahlen Sie |
| **Source Available** | Einsehbarer Code, aber Nutzung eingeschränkt | Kein echter Self-Hosting-Anspruch |
| **„Open" als Marketing** | Nur ein öffentliches Repo für Beispieldateien | Der Kern bleibt eine Blackbox |

SentryMail ist **Open Core**: Der Kern liegt offen und ist dauerhaft kostenlos
selbst betreibbar. Die Add-ons finanzieren die Weiterentwicklung. Wir halten das
für ehrlicher, als ein Produkt „Open Source" zu nennen, dessen nützliche Hälfte
hinter einer Lizenzprüfung steckt.

## Was Self-Hosting wirklich kostet

Kostenlos ist die Lizenz, nicht der Betrieb. Rechnen Sie realistisch mit:

- **Infrastruktur** – ein Container-Host, Datenbank, Backup, Monitoring
- **Zustellbarkeit** – SPF, DKIM und DMARC so gesetzt, dass Ihre eigenen
  Simulationen ankommen, ohne dass Sie die Domain-Reputation beschädigen
- **Allowlisting** – der Mail-Gateway muss Simulationen durchlassen, sonst
  messen Sie die Filterqualität statt die Aufmerksamkeit Ihrer Belegschaft
- **Lerninhalte** – Trainings altern, Angriffsmuster ändern sich
- **Pflege** – Updates, Sicherheitspatches, Wiederherstellungstests

Der letzte Punkt ist der, an dem Open-Source-Projekte im Unternehmen scheitern.
Ein Tool, das nach acht Monaten niemand mehr aktualisiert, ist kein
Compliance-Nachweis, sondern ein Risiko.

Unsere ehrliche Empfehlung: Wenn Sie ein Team haben, das ohnehin Container
betreibt, ist Self-Hosting eine gute Wahl und die Community-Edition der richtige
Einstieg. Wenn Sie diese Kapazität nicht haben, kaufen Sie mit einem Add-on vor
allem Zeit – und die ist meist billiger als die Stunden, die ein
selbstgebautes Programm im Jahr frisst.

## Vom Framework zum Awareness-Programm

Klassische Open-Source-Phishing-Frameworks lösen eine Teilaufgabe: Sie
verschicken Kampagnen und zählen Klicks. Was sie nicht liefern, ist der Rest des
Programms – Lerninhalte im Anschluss an den Klick, eine Fortschrittsmessung über
Monate und eine Dokumentation, die einer Prüfung standhält.

SentryMail setzt genau dort an: Die Simulation ist der Auslöser, das kurze
Training die Reaktion, der Awareness-Score die Messgröße und das Reporting der
Nachweis. Wer heute Gophish betreibt und an die Grenze dieser Werkzeugklasse
stößt, findet hier den nächsten Schritt, ohne den Self-Hosting-Ansatz aufgeben
zu müssen.
