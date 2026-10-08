# FEAST. — unofficial fan-made chocolate concept site

A static, scroll-driven landing site (no build step, no dependencies).

## Run it
Open `index.html` in a browser. For best results serve the folder:

    python3 -m http.server 8000      # then open http://localhost:8000

(The Archivo font loads from Google Fonts, so it needs an internet connection; a condensed system font is the fallback.)

## Structure
    index.html          page markup
    css/style.css       all styles (design tokens are the :root variables)
    js/main.js          hero scrub, liquid pointer shader, shop/bag, FAQ, newsletter
    assets/frames/      120 transparent hero frames (from the unwrapping video)
    assets/clean.webp   keyed clean bar (flavor posters, shop cards)
    assets/broken.webp  keyed broken bar (final CTA)

## Where to tweak
- Scroll -> video frame map: `KF` in js/main.js. Hero copy timing: `GR`. Giant background words: `BK`.
- Liquid pointer: the `FS` fragment shader (blob size `.075-.045*k`, wobble `.014`), fade speed `en*.93`, trail lag `.2` / `.28`.
- Section colours: `PAL` (rest background, blob fill, blob edge) and `HP` (hero beats).
- Products and prices: the `PR` array. Names/formats/prices were taken from the official store listing (Oct 2026) - verify before relying on them. Items shown as SEE STORE had no price in the source.

## Notes
- This is an UNOFFICIAL fan concept. The wrapped-pack frames show third-party logos and trademarks; use for portfolio/fan purposes only, not commercially, and do not present it as the official site.
- Non-bar product art (cups, gummies, milk) is illustrated placeholder art - replace with real photos.
- Cart is front-end only; checkout links out to feastables.com.
- Page weight is ~11 MB because all hero frames are sharp and transparent.
