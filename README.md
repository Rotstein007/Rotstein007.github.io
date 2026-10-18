# Rotstein

Persönliches Portfolio als Onepager mit einem interaktiven Kreismenü. Alle Abschnitte stehen auf einer durchgehend scrollbaren Seite. Der Kreis führt über direkte Ankerlinks zu den einzelnen Inhalten. Die Webseite wird als statische Seite über GitHub Pages unter [rotstein.dev](https://rotstein.dev/) bereitgestellt.

## Lokal ansehen

Es sind keine Installation und kein Build erforderlich. Im Projektverzeichnis einen lokalen Webserver starten:

```sh
python3 -m http.server 8000
```

Anschließend [localhost:8000](http://localhost:8000/) öffnen.

## Aufbau

- `index.html`: Inhalte und zugängliche Navigation, auch ohne JavaScript lesbar.
- `assets/css/site.css`: gemeinsame Gestaltung des Portfolios und der Datenschutzseiten.
- `assets/js/site.js`: Sprachwechsel und Kopieren des Discord-Namens. Die Abschnittslinks funktionieren auch ohne JavaScript.
- `assets/js/theme.js`: gemeinsamer Hell-/Dunkelmodus für Portfolio und Datenschutzseiten.
- `assets/fonts/`: die verwendeten Ubuntu-Schriftschnitte.
- `assets/images/`: Avatar, Kreissegment, Favicon, transparenter Projekt-Screenshot und Mineplay-Schriftzug.
- `datenschutz-*.html`: bestehende Datenschutzseiten mit unveränderten Adressen.
- `.well-known/` und `CNAME`: Flathub-Verifikation und eigene Domain.

Die Seite startet bei jedem Laden auf Deutsch. Der Button „I don't speak Bundesliga“ schaltet alle Portfolio-Inhalte ins Englische um. „Brezel und Lederhose“ wechselt zurück. Die Sprache wird weder aus den Browsereinstellungen noch aus gespeicherten Präferenzen übernommen.

Der Hell-/Dunkelmodus wird dagegen lokal im Browser gespeichert. Standard ist das dunkle Studio-Design. Das berührte oder fokussierte Kreissegment wird etwas größer und tritt nach außen. Es bleibt nach dem Aufruf eines Abschnitts keine Auswahl markiert. Die Bewegung beachtet die Einstellung für reduzierte Bewegung.

Mineplay ist als gemeinsames Projekt mit Freunden kompakt unter dem vorgestellten Projekt verlinkt. Als persönlicher Kontakt wird ausschließlich Discord angeboten.

Die Mineplay-Grafik ist der [Original-Schriftzug](https://mineplay.link/img/mineplay_schrift4.png) aus dem Kopfbereich der Projektseite. Sie liegt lokal mit unverändertem Alphakanal vor.

## Inhalte pflegen

Die deutschen Texte stehen als lesbarer Standard im HTML. Bei Änderungen auch die Übersetzungen in `assets/js/site.js` anpassen. Neue Projektbilder mit Transparenz als PNG oder in einem anderen Format mit Alphakanal einbinden.

Diese beiden Adressen werden von externen Diensten verwendet und müssen erhalten bleiben:

- `/datenschutz-rotsteins-game-collection.html`
- `/datenschutz-smashed-pumpkin.html`

## Prüfung

```sh
node --check assets/js/site.js
node --check assets/js/theme.js
git diff --check
```

Vor der Veröffentlichung Ankerlinks im Kreis, direkte Abschnittsaufrufe, Tastaturbedienung und beide Sprachrichtungen auch bei schmalem Browserfenster prüfen. Beide Datenschutzadressen müssen direkt erreichbar bleiben.

## Lizenz

Der Quellcode steht unter der [MIT-Lizenz](LICENSE).
