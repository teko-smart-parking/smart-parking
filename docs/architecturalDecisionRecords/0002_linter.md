# ADR 0002: Linter

## Status

accepted

## Kontext

Um ein konsistentes und standardisiertes Format für Dokumente im Projekt sicherzustellen, wird ein Tool benötigt, das automatische Formatierungsrichtlinien überprüft und durchsetzt. Dies ist besonders wichtig, um die Lesbarkeit, Wartbarkeit und Einheitlichkeit der Dokumentation zu gewährleisten.

## Entscheidung

Das npm-Package markdownlint-cli wird als Linter für Markdown-Dokumente eingesetzt.

## Konsequenzen

Positive Konsequenzen:

- Einheitliche Formatierung aller Markdown-Dateien im Projekt.
- Verbesserte Lesbarkeit und Wartbarkeit der Dokumentation.
- Automatisierte Überprüfung spart Zeit und reduziert manuelle Fehler.

Negative Konsequenzen:

- Erfordert eine initiale Konfiguration und Einarbeitung.
- Entwickler müssen sicherstellen, dass der Linter in ihre Workflows integriert wird.
