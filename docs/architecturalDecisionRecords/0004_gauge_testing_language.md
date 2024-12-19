# ADR 0004: Gauge Testing Language JavaScript

## Status

accepted

## Kontext

Gauge ist ein leichtgewichtiges, Testautomatisierungs-Framework, das zur Erstellung von Akzeptanztests verwendet wird.
JavaScript ist eine einfach Sprache.
Die anderen Sprache wie C#, Java, Python und Ruby wurde im Team diskutiert.
Nur bei JavaScript gab es einen einstimmigen Konsents.

## Entscheidung

JavaScript wird als Sprache für die Implementierung von Tests mit Gauge ausgewählt.

Die Entscheidung basiert auf folgenden Überlegungen:

- Die vorhandene Expertise im Team reduziert die Einarbeitungszeit.
- Die umfangreiche Tool- und Framework-Unterstützung von JavaScript für Webentwicklung und Testautomatisierung.

## Konsequenzen

### Positive Konsequenzen

- Reduzierter Lernaufwand, da verschiedene Teammitglieder bereits JavaScript-Kenntnisse besitzen.
- Die Tests Skript können sehr schnell implementiert werden.

### Negative Konsequenzen

- Potenzielle Herausforderungen bei der Wartung von Tests aufgrund der dynamischen Typisierung von JavaScript.
- Abhängigkeit von der Node.js-Laufzeitumgebung für die Testausführung.
