# healthleticx Website

Statische Website (HTML, CSS, JavaScript) ohne Build-Schritt und ohne externe Ladequellen. Gehostet über GitHub Pages.

Live: https://justinkaram14.github.io/healthleticx-website/

## Aufbau

```
index.html                 Startseite
kontakt/  impressum/  datenschutz/  danke/     Unterseiten (je eine index.html)
assets/css/style.css       Design
assets/js/main.js          Hero, 3D-Hantel, Karte, Zurück-Buttons, Danke-Name
assets/js/form.js          Kontaktformular (Versand über Web3Forms)
assets/fonts/              Archivo (variable Schrift, lokal, Lizenz OFL)
assets/vendor/             GSAP 3.12.5, ScrollTrigger, Three.js r128 (lokal)
assets/media/              Videos und Fotos (siehe unten)
```

Alle Pfade sind relativ, damit die Seite unter `/healthleticx-website/` und später auf einer eigenen Domain läuft.

## Lokal ansehen

```
python3 -m http.server 8000
```

Dann `http://localhost:8000/` öffnen.

## Platzhalter ersetzen

Jeder Platzhalter im Code ist mit `<!-- PLATZHALTER: … -->` markiert. Suche nach `PLATZHALTER`.

Schon eingebaut: Porträt (`portrait.jpg`/`.webp`) und die fünf App-Screenshots (`app-1` bis `app-5`, PNG + WebP) in `assets/media/`.

Noch offen:

| Platzhalter | Datei in `assets/media/` | Format |
|---|---|---|
| Hero-Video quer | `hero-quer.mp4` | 16:9, 1920 × 1080, unter 8 MB, ohne Ton |
| Hero-Video hoch | `hero-hoch.mp4` | 9:16, 1080 × 1920, unter 5 MB, ohne Ton |
| Standbild Hero | `hero-poster.jpg` | wie Video |
| Vorher/Nachher (optional) | `review-1-vorher.jpg`, `review-1-nachher.jpg` | 3:4, ca. 1200 × 1600 |

Außerdem offen: Reviews (Zitat, Vorname + Initial), Impressum-Daten, Datenschutz-Texte und der **Web3Forms Access Key** (`data-access-key` in `kontakt/index.html`).

## Eigene Domain später

Die Adresse `https://justinkaram14.github.io/healthleticx-website/` steht in `canonical`/`og:url`/`og:image` aller Seiten sowie in `sitemap.xml` und `robots.txt`. Bei einer eigenen Domain dort per Suchen und Ersetzen austauschen. Hinweis: `robots.txt` und `sitemap.xml` werden von Suchmaschinen nur im Hauptverzeichnis einer Domain beachtet, also erst mit eigener Domain voll wirksam.

## Veröffentlichen

Push auf `main` startet `.github/workflows/deploy.yml` und stellt die Dateien (ohne Build) online.

## Datenschutz und Marke

- Kein Tracking, keine Cookies, keine externen Schriften oder Skripte beim Laden.
- Der Name der Marke wird immer **healthleticx** geschrieben (klein, mit x).
- Die Reihenfolge der Hantel-Scheiben (Gelb, Grün mit hellem Rand, Hellgrau) ist bewusst so gewählt, damit sie auch bei Farbsehschwäche unterscheidbar bleibt.
