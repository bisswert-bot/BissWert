# BissWert – Übersicht

Statische Website, kein Server/Backend nötig. Vier Dateien musst du kennen:

```
bisswert/
├── index.html          Startseite (Hero, Suche, Restaurant-Grid, FAQ)
├── legal.html           Rechtliches (rendert automatisch aus legal-content.js)
├── css/style.css        Gesamtes Design (Farben ganz oben unter :root anpassbar)
├── js/config.js         ← HIER: Affiliate-Links & Restaurant-Daten eintragen
├── js/legal-content.js  ← HIER: Impressum/AGB/Datenschutz/Widerruf/Cookies-Text einfügen
├── js/app.js             Logik (Suche, Filter, Sortierung) – normalerweise nicht anfassen
└── assets/logo.svg      Logo als eigene Datei
```

## 1. Affiliate-Links nachreichen
Öffne `js/config.js`. Jedes Restaurant hat pro Anbieter ein Feld `affiliateUrl`.
Ersetze `"PASTE_AFFILIATE_LINK_HERE"` durch deinen echten Link. Solange der
Platzhalter noch drinsteht, zeigt die Seite beim Klick automatisch einen
Hinweis „Link noch nicht hinterlegt“ statt eines kaputten Links.

Später kannst du hier auch eigene/echte Restaurants ergänzen (Objekt in der
`RESTAURANTS`-Liste kopieren und anpassen) oder das Array durch eine
Anbindung an echte Portale/APIs ersetzen.

## 2. Rechtstexte nachreichen
Öffne `js/legal-content.js`. Jeder Abschnitt (Impressum, AGB, Datenschutz,
Widerruf, Cookies) hat Textblöcke mit `[ ... ]`-Platzhaltern. Text einfach
zwischen die Backticks (`` ` ``) einfügen – kein HTML-Wissen nötig.
**Wichtig:** Das ist keine Rechtsberatung. Lass die Texte vor dem Livegang
von einem Anwalt/IT-Recht-Fachanwalt oder einem seriösen Generator prüfen.

## 3. Hosten (ohne Shopify o.ä.)
Ordner komplett hochladen bei z. B. Netlify, Vercel, Cloudflare Pages oder
klassischem Webhosting per FTP. Eigene Domain lässt sich bei allen Anbietern
verbinden. Keine Installation, kein Framework, keine Abhängigkeit von Dritten.

## 4. Design anpassen
Alle Farben/Radien stehen ganz oben in `css/style.css` unter `:root`.
Hauptakzentfarbe: `--accent`. Logo (Coral-Squircle mit Coin) liegt zusätzlich
als eigene Datei in `assets/logo.svg`.
