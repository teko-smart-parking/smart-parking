# User Story 002

In dieser User Story wird die Seite des Sensors angeschaut und wie der Output der erkennten Parplatz zustände weitergegeben wird.

## Sensor Specification

Der Sensor sollte anzeigen können ob der Parplatz besetzt ist oder ob er frei ist.

1. Parkplatz ist frei
2. Sensor sendet Zustand an Datenbank
3. Auto fährt auf Parkplatz
4. Sensor erkennt Auto
5. Sensor gibt einen neuen Wert an Datenbank.

## Output

1. Wir erhalten eine Datenbank mit den Zuständen aller Parkplätze

## Was pasiert wen UI den Knopf freie Parkplätze anzeigen ausführt

1. Anfrage wird deponiert. (Inhalt der anfrage Standort dert anfrage und radius welcher gewählt wurde für freie Parkplätze)
2. Kontrolle ob alle Parkplätze eine Zustand haben
3. Datenbank wird ausgelesen anhand der mit gelieferten Location kriterien
4. Ausgelesene Parkplätze werden in ein mit ID gekenzeichnetes FIle verpackt
5. File mit den Parkplatz daten werden zurückgegeben an UI für spezifischen User

## Test Cases
