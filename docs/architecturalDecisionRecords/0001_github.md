# ADR 0001: Github als Remote Repository und Versionskontrolle System

## Status

Accepted

## Kontext

Für unser Projekt benötigen wir eine Plattform, die als zentrales Werkzeug für die Zusammenarbeit im Team und die Versionskontrolle von Code dient. Sie sollte die Entwicklung von Software effizient unterstützen und die Anforderungen an moderne Softwareentwicklung erfüllen.

In Betracht gezogen wurden GitLab und GitHub, wobei folgende Funktionen als essenziell identifiziert wurden:

- Code-Repository mit Versionskontrolle
- Unterstützung für Continuous Integration/Continuous Deployment (CI/CD)
- Kollaborationstools wie Kanban-Boards

## Entscheidung

Wir haben uns für GitHub entschieden. Die Gründe für diese Entscheidung sind:

- Einige Teammitglieder haben bereits Erfahrung mit GitHub, wodurch die Einarbeitungszeit reduziert wird.
- GitLab ist im Team weitgehend unbekannt, was eine längere Einarbeitungszeit und höhere Schulungskosten bedeuten würde.
- GitHub bietet eine kostenlose Nutzung und unterstützt alle erforderlichen Funktionen wie CI/CD, Kollaborationstools und eine starke Versionskontrolle.

## Konsequenzen

Positive Konsequenzen:

- Reduzierter Schulungsaufwand dank vorhandener Kenntnisse im Team.
Kostenloser Zugang zu einer bewährten Plattform mit umfangreichen Funktionen.
- Nutzung moderner Entwicklungsfeatures wie GitHub Actions für CI/CD.

Negative Konsequenzen:

- Die Akzeptanz und Bereitschaft im Team, GitHub effektiv zu nutzen, ist entscheidend für den Erfolg.
- Teammitglieder müssen sich mit den spezifischen Features von GitHub vertraut machen, einschließlich:
- Repository-Management (z. B. Klonen, Branches, Pull Requests)
- Einrichtung und Nutzung von GitHub Actions für CI/CD
