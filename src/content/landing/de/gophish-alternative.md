---
title: Gophish-Alternative mit Trainings und Nachweisen
eyebrow: Werkzeugvergleich
metaTitle: "Gophish-Alternative mit Training & Nachweisen"
metaDesc: "Gophish verschickt Phishing-Kampagnen kostenlos – hat aber seit 2022 keinen Release mehr. Was fehlt, wenn daraus ein dauerhaftes, prüfbares Awareness-Programm nach NIS2 werden soll."
intro: Gophish war für viele Teams der Einstieg in Phishing-Simulationen. Zwei Dinge sprechen heute gegen den Dauerbetrieb – der Wartungsstand und die Frage, was nach dem gemessenen Klick eigentlich passiert.
breadcrumb: Gophish-Alternative
ogImage: alternative.png
ctaTitle: Self-Hosting behalten, Programm ergänzen
ctaText: SentryMail lässt sich wie Gophish auf eigener Hardware betreiben – bringt aber Lernpfade, Awareness-Score und Nachweisdokumentation gleich mit.
disclaimer: "Angaben zu Gophish beziehen sich auf das öffentliche Repository github.com/gophish/gophish, Stand Juli 2026. Gophish steht unter der MIT-Lizenz und ist ein unabhängiges Projekt ohne Verbindung zu SentryMail. Alle genannten Marken gehören ihren jeweiligen Inhabern."
faq:
  - question: Ist Gophish schlecht?
    answer: Nein, aber es ist erkennbar aus der aktiven Entwicklung gefallen. Als Werkzeug ist Gophish solide und erfüllt seine Aufgabe – Kampagnen anlegen, versenden, Klicks messen. Der letzte Release v0.12.1 stammt allerdings vom 14. September 2022, der letzte Commit auf dem master-Branch vom 23. September 2024. Bei Software, die Phishing-Mails verschickt und eingegebene Zugangsdaten verarbeitet, ist so ein Stillstand ein eigenes Risiko. Dazu kommt, dass Gophish nie als vollständiges Awareness-Programm mit Lerninhalten und Compliance-Nachweisen gedacht war.
  - question: Kann ich von Gophish zu SentryMail wechseln?
    answer: Beide Werkzeuge laufen auf eigener Infrastruktur, das Betriebsmodell bleibt also dasselbe. Sie tauschen kein Konzept aus, sondern ergänzen die Simulation um Lernpfade, Fortschrittsmessung und Dokumentation.
  - question: Was kostet SentryMail im Vergleich zum kostenlosen Gophish?
    answer: Die Community-Edition von SentryMail ist ebenfalls kostenlos und selbst hostbar. Kosten entstehen erst, wenn Sie Business oder Enterprise für Automatisierung, SAML-SSO, SIEM-Export oder automatische Pflichtschulungen dazunehmen.
  - question: Reicht Gophish für NIS2?
    answer: Für die Simulation selbst kann es reichen. Was Sie zusätzlich brauchen, sind die Lerninhalte und eine belastbare Dokumentation, wer wann welche Schulung abgeschlossen hat – diesen Teil deckt ein reines Phishing-Toolkit nicht ab.
---

## Was Gophish gut macht

Gophish ist ein quelloffenes Phishing-Toolkit unter MIT-Lizenz, gedacht für
Unternehmen und Penetration Tester. Die Installation ist unkompliziert, die
Oberfläche verständlich, und für das Aufsetzen und Auswerten einzelner
Kampagnen braucht es keine Einarbeitungswoche. Wenn Ihr Ziel eine
Momentaufnahme ist – *wie anfällig ist unsere Belegschaft gerade?* – ist Gophish
eine gute und kostenlose Antwort.

Auch das Betriebsmodell überzeugt: Sie hosten selbst, es gibt keinen
Auftragsverarbeiter und keine Daten in fremder Hand.

## Der Wartungsstand ist das eigentliche Problem

Bei aller Wertschätzung für das Projekt lässt sich eines nicht übergehen: Der
letzte Release **v0.12.1 stammt vom 14. September 2022**, der letzte Commit auf
dem `master`-Branch vom **23. September 2024**. Beides ist öffentlich im
Repository nachprüfbar.

Für ein Werkzeug, das Phishing-Mails versendet, Landing Pages ausliefert und
eingegebene Zugangsdaten entgegennimmt, ist das kein Randdetail. Eine solche
Anwendung steht per Definition offen im Netz und verarbeitet genau die Daten,
die ein Angreifer haben will. Ohne laufende Sicherheitsupdates verschiebt sich
das Risiko von der simulierten auf die echte Bedrohung – und der Betrieb wird
zu einer Zusage, die Sie selbst einlösen müssen.

Wer Gophish heute einsetzt, sollte das bewusst tun: in einem abgeschotteten
Netz, nur für die Dauer einer Kampagne, mit eigener Prüfung des Codes.

## Wo die Werkzeugklasse endet

Ein Phishing-Toolkit misst Verhalten. Ein Awareness-Programm verändert es und
weist das nach. Zwischen beidem liegen vier Dinge, die Gophish nicht mitbringt:

**Lerninhalte.** Nach dem Klick passiert das Entscheidende. Ohne kurze,
verständliche Erklärung im richtigen Moment bleibt von der Simulation nur ein
schlechtes Gefühl. Gophish liefert das Werkzeug, nicht die Kurse.

**Fortschritt über Zeit.** Eine einzelne Klickrate sagt wenig. Interessant wird
es, wenn Sie sehen, wie sich Klick- und Meldequote über Quartale entwickeln und
welche Bereiche zurückbleiben.

**Zuweisung und Eskalation.** Wer eine Schulung nicht abschließt, muss erinnert
werden. Das von Hand nachzuhalten, ist genau die Arbeit, die in der Praxis
liegen bleibt.

**Prüfbare Nachweise.** § 30 BSIG verlangt Schulungen und
Sensibilisierungsmaßnahmen – und eine Aufsicht will belegt sehen, dass sie
stattgefunden haben. Kampagnenstatistiken allein sind kein Schulungsnachweis.

## Der ehrliche Vergleich

| | Gophish | SentryMail Community | SentryMail Business/Enterprise |
|---|---|---|---|
| Lizenz | MIT, Open Source | Open-Source-Kern | Kommerzielle Add-ons |
| Kosten | kostenlos | kostenlos | ab 10 €/Mitarbeiter:in/Jahr |
| Self-Hosting | ja | ja | ja |
| Phishing-Kampagnen | ja | ja | ja |
| Lerninhalte | nein | Grundtrainings | volle Lernpfade |
| Awareness-Score | nein | Basis-Reporting | Score je Team |
| Automatische Pflichtschulungen | nein | nein | Enterprise |
| SAML Single Sign-On, SIEM-Export | nein | nein | Enterprise |
| Letzter Release | 14.09.2022 | laufend | laufend |

## Wann Gophish trotzdem passt

Für einen einzelnen Penetrationstest in einem abgeschotteten Netz, bei dem Sie
die Umgebung danach wieder abbauen, bleibt Gophish ein brauchbares und
kostenloses Werkzeug – vorausgesetzt, Sie kennen den Wartungsstand und richten
den Betrieb danach ein.

Sobald daraus etwas Dauerhaftes wird – eine Installation, die stehen bleibt,
ein Programm, das jemand jedes Quartal belegen muss – trägt ein Projekt ohne
Release seit 2022 diese Last nicht mehr.
