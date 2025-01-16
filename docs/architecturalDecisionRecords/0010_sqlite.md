# ADR 0010: SQLite

## Status

accepted

## Kontext

Um den Parkplatz Namen (ID), Standort und Status abzurufen / abzuspeichern brauchen wir eine Datenbank. Zur Auswahl stehen PostgreSQL, MongoDB, SQLite


## Entscheidung
Wir haben diskutiert, ob wir die Geolocation direkt in der Datenbank haben wollen und haben uns schlussendlich dagegen entschieden, da es ohne grösseren Aufwand in der Applikationslogik implementierbar ist und wir uns nicht auf MongoDB festlegen müssen. 

SQLite wird als Datenbank gewählt, basierend auf den folgenden Argumenten:

- **Ressourcenschonend**: SQLite ist eine leichtgewichtige Datenbank, die keinen dedizierten Server benötigt und nur minimale Systemressourcen verbraucht. Sie eignet sich besonders gut für eingebettete Anwendungen oder Umgebungen mit begrenzter Hardwareleistung.
- **Einfache Installation**: Die Einrichtung von SQLite ist unkompliziert, da es keine komplexe Serverkonfiguration erfordert. Die gesamte Datenbank besteht aus einer einzigen Datei, was die Bereitstellung und Wartung erheblich vereinfacht.
- **Weit verbreitet**: SQLite ist eine der am häufigsten genutzten Datenbanken weltweit, was zu einem breiten Verständnis und einer großen Nutzerbasis führt.
- **Umfangreicher Support**: Aufgrund ihrer Verbreitung steht eine Vielzahl von Dokumentationen, Forenbeiträgen und Tools zur Verfügung, die den Einsatz und die Problembehebung erleichtern.
- **Open Source**: SQLite ist unter einer liberalen Open-Source-Lizenz verfügbar, wodurch sie kostenfrei nutzbar ist und flexibel an spezifische Anforderungen angepasst werden kann.
## Konsequenzen
- Simple Datenbank mit klaren Limitationen
- Repository wird nur von 3 Personen gewartet

### Positive Konsequenzen
- Da es auf SQL basiert haben wir ein guten Migrationspfad bei Bedarf auf grössere DB wie PostgreSQL
- Sehr Ressourcenschonend (Nachhaltiges Programmieren)


### Negative Konsequenzen
- Nicht gut skalierbar wenn viele Server auf die SQLite Datenbank zugreifen


