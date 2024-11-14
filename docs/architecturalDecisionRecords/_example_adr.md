# ADR 0001: Ruby als Skriptsprache zum Repository Management

## Status ("proposed", "accepted", "discarded", "deprecated", "superseeded")

Accepted

## Kontext

Die Git-Repositorys unseres Produkts werden auf GitHub Enterprise
bei uns im Unternehmen gehostet. GitHub wird dabei f�r die
Verwaltung von Issues und das Release Management verwendet.
In unserer t�glichen Arbeit f�hrt es immer wieder zu Problemen,
dass es in den Projekten unterschiedliche Labels f�r die Issues
gibt und nicht �berall die gleichen Milestones verf�gbar sind.
Das erschwert die Arbeit und Planung. Versuche Labels und
Milestones manuell aktuell zu halten, sind immer
wieder gescheitert.

## Entscheidung

Wir wollen die Pflege unserer Git-Repositorys in GitHub Enterprise
und deren Metadaten �ber Skripte automatisieren, um deren
einheitliche Konfiguration sicherzustellen und Fehler in der
Konfiguration zu finden. Durch den Einsatz von Skripten
kann die Pflege auch �ber unseren CI-Server automatisiert
werden, und alle Teammitglieder k�nnen die Arbeit �bernehmen.

Dabei haben wir uns f�r Ruby als Skriptsprache entschieden. Zum
einen weil GitHub mit Octokat eine Ruby-Library bereitstellt und
zum anderen weil Ruby im Team gegen�ber der Kombination
von JavaScript und Nodes.js die gr��ere Akzeptanz hat.

## Konsequenzen

Aufgrund dieser Entscheidung muss im Team grundlegendes Ruby-
Wissen aufgebaut werden und zum Teil existierende Python- und
Bash-Skripte ersetzt werden. Weiterhin m�ssen wir uns auf die zu
nutzenden Labels  f�r Issues einigen und anschlie�end alte Labels
durch neue ersetzen.

hall