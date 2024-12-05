# User Story 002
In dieser User Story wird die Seite des Sensors angeschaut und wie der Output der erkennten Parplatz zustände weitergegeben wird.

## Sensor Specification
Der Sensor sollte anzeigen können ob der Parplatz besetzt ist oder ob er frei ist.

1. Parkplatz ist frei
2. Sensor gibt einen Wert aus welcher vom System eingelesen kann.
3. Auto fährt auf Parkplatz
4. Sensor erkennt Auto 
5. Sensor gibt einen Wert aus welcher vom System eingelesen Wird.

## Output 
1. wir erhalten eine Daten Liste aller parpklätze und ihrem Zustand.

## Listen verarbeitung

1. Liste wird eingelesen
2. Daten werden gefiltert alle Parkplätze mit kenzeichnung Besetzt in eine Daten ablage und alle mit kenzeichnung frei in eine zweite Datenablage

## Was pasiert wen UI den Knopf freie Parkplätze anzeigen ausführt

1. Anfrage wird deponiert. 
2. Sensoren werden abgefragt nach Zustand.
3. Sensor Zustände werden ausgelesen.
4. Sensor Zustände werden in Daten packete abgefüllt.
5. File mit den freien Parkplätzen wird bereit gestellt.
6. File mit den besezten Parkplätzen wird bereitgestellt.
7. Beide FIles werden an UI übergeben.

