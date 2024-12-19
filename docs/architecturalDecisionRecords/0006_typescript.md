# ADR 0006: TypeScript

## Status

accepted

## Kontext

Die Anwendung erfordert eine robuste Codebasis.

Wir wollen eine Programmiersprache für das gesamte Projekte. (Die Tests ausgeschlossen)

JavaScript allein bietet keine statische Typisierung.

TypeScript bietet verschiedenste Libraries und Frameworks für Frontend und Backend Applikationen.

## Entscheidung

Wir entscheiden uns für die Nutzung von TypeScript als primäre Sprache für die Entwicklung.
Dies Betrifft Frontend und Backend Codes.

## Konsequenzen

### Positive Konsequenzen

- Statische Typisierung erleichtert das Verständnis und die Wartung von Code.
- TypeScript erkennt viele Fehler bereits während der Entwicklungszeit.
- Die Typdefinitionen dienen als eingebettete Dokumentation, die von IDEs wie VS Code genutzt wird.
- TypeScript wird aktiv weiterentwickelt und ist in vielen Bibliotheken und Frameworks Standard.
- Einheitliche Sprache für Frontend und Backend

### Negative Konsequenzen

- Entwickler ohne TypeScript-Erfahrung benötigen Zeit für die Einarbeitung.
