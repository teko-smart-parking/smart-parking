# ADR 0003: Gauge Testing

## Status

accepted

## Kontext

Die Anwendung benötigt ein effizientes und leichtgewichtiges Tool für automatisierte Tests,
das einfach zu bedienen ist und die Lesbarkeit von Testfällen verbessert.
Gauge ist ein Open-Source-Tool für End-to-End-Tests, welches sich durch textbasierte Beschreibung von Tests auszeichnet.
Es ermöglicht Entwicklern, Tests in einer menschenlesbaren Sprache zu schreiben,
was die Zusammenarbeit zwischen technischen und nicht-technischen Stakeholdern erleichtert.

## Entscheidung

Gauge wird als primäres Test-Tool für automatisierte End-to-End-Tests implementiert.

## Konsequenzen

Positive Konsequenzen:

- Verbesserte Lesbarkeit und Verständlichkeit der Testfälle durch textbasierte Spezifikationen.
- Unterstützung für mehrere Sprachen und Plattformen (z. B. Java, Python, JavaScript).
- Einfache Integration in CI/CD-Pipelines.
- Modularität ermöglicht die Erweiterung und Anpassung der Testumgebung.
- Open-Source-Lösung ohne Lizenzkosten.
- Auch Markdown basiert.

Negative Konsequenzen:

- Zusätzlicher Einarbeitungsaufwand für Teams, die Gauge noch nicht kennen.
- Begrenzte Community im Vergleich zu populäreren Test-Tools wie Selenium.
- Potenzielle Skalierungsprobleme bei sehr großen Test-Suites.
- Erfordert eine sorgfältige Wartung von textbasierten Spezifikationen, um Konsistenz zu gewährleisten.
