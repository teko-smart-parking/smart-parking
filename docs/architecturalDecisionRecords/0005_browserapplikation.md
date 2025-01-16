# ADR 0005: Browserapplikation

## Status

accepted

## Kontext

Unsere Smart-Parking-Applikation zielt darauf ab, eine benutzerfreundliche und leicht zugängliche Lösung für Parkplatzmanagement bereitzustellen. Da unser Benutzer unterschiedliche Plattformen (Tablet, Smartphone) nutzen, ist eine plattformunabhängige Lösung erforderlich. Eine Browserapplikation ermöglicht dies ohne die Notwendigkeit, native Apps für jede Plattform zu entwickeln. Zudem vereinfacht die Nutzung webbasierter Technologien die Wartung und das Deployment.

## Entscheidung

Die Smart-Parking-Applikation wird als Browserapplikation entwickelt.

## Konsequenzen

Aus den oben genannten Entscheiden zu einer Browswerapplikation benötigen wir implizit eine Server / Client Architektur.
Im Zusammenhang mit dieser Architektur benutzen wir Rest-API zur Kommunikation zwischen Server und Client.

### Positive Konsequenzen

- Plattformunabhängigkeit: Die Applikation ist auf allen gängigen Browsern zugänglich.
- Einfachere Wartung und Aktualisierung durch zentrale Steuerung des Deployments.
- Schnellere Entwicklung und reduzierte Kosten im Vergleich zu nativen Apps für mehrere Plattformen.
- Keine Notwendigkeit für Benutzer, zusätzliche Software zu installieren.

### Negative Konsequenzen

- Abhängigkeit von Browserkompatibilität und Leistung.
- Begrenzter Zugriff auf bestimmte gerätespezifische Funktionen im Vergleich zu nativen Apps.
- Mögliche Einschränkungen in der Offline-Nutzung, abhängig von der Implementierung.
