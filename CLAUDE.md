# CLAUDE.md

Personal site for Sammy Taubman — staubman.vercel.app. Static Astro site,
one page, no framework JS beyond three small inline scripts (scroll-spy nav,
Scrabble word-of-the-day, and the watercolor background).

**Check `TODO.md`** for open threads and ideas Sammy wants to pursue —
update it as items land or new ideas come up.

## Git conventions

- **Add `Co-authored-by: Sammy Taubman <staubman1@gmail.com>` to every
  commit** so Sammy shows up alongside the bot author.
- `main` is production: Vercel deploys it on push. Ship small, settled
  changes directly to main; keep experiments and undecided design work on a
  branch/PR until Sammy signs off (e.g. PR #11 holds the desktop-navbar
  logo experiment and design candidates).

## Commands

- `npm run dev` / `npm run build` / `npm run preview` (plain Astro, no
  tests or linter).
- To eyeball changes, build and screenshot with the pre-installed
  Playwright Chromium at two widths: **1440px (desktop)** and **390px
  (mobile)** — the main breakpoint is **640px** (senses run together).

## Concept: the whole site is a dictionary

Every design decision extends one bit: the page is a dictionary entry for
"Sam·my Taub·man, *n. proper*". Sections are entries with headwords,
part-of-speech tags, numbered senses, and "See also" cross-references.
The other identity thread is **Scrabble** (sense 4 of the hero): tile-rack
logo, word-of-the-day footer, Scrabble-board og image. New features should
speak one of those two languages.

## Layout

- `src/content/site.js` — the `sections` list drives BOTH the top bar
  and section headers (single source of truth); also contact links. Other
  content lives in `src/content/{roles,projects,scrabble}.js`. The hero's
  text is deliberately inline in `Entry.astro` instead.
- `src/styles/theme.css` — shared design tokens only (incl.
  `--content-width`, the centered column the top bar lines up with). One-off values stay
  inline in the component that uses them (deliberate convention).
- `src/components/` — Nav (sticky top bar at every width: the rack logo
  as the home link, section links; clear over the painting at the top,
  blurred backdrop once scrolled), Entry (hero), Section/
  Experience/Projects/Contact, Footer (word of the day).
- `src/components/Watercolor.astro` — the first screen's backdrop: a
  `<canvas>` behind the hero (it scrolls away with it, bottom fading out),
  painted live as a watercolor night landscape (moon, misty hills, pines)
  in the site palette. Below it the page is the green, sparsely speckled
  with faint "salt" blooms (like salt on a wet wash) that the same script
  generates as a wrapping tile and sets as the body background.
  The painting's top edge fades into the plain bg color on purpose: mobile
  Safari tints its toolbar with the page background, and an unfaded sky
  showed as a mismatched band under it. `theme-color` is set to match. Keep the
  scrolled page this quiet. Rejected so far: a mottled watercolor ground
  (too busy) and a regular dot grid (read as graph paper, not watercolor). Each wash is a recursively
  deformed polygon glazed dozens of times at low alpha. On landing, washes
  sweep in behind a wet edge (~4.4s total); `prefers-reduced-motion`
  paints it instantly. Every shape has its own seeded RNG, so the painting
  is identical on every visit. Keep it dark behind text: muted text has to
  stay readable over the hills.
- `design/` — **not part of the build.** Generator HTML + candidates for
  brand assets: `design/og-alternatives/og.html` regenerates the og image
  (open in a browser, screenshot frame `#d` at 2x → `public/og-image.png`);
  the same folder on PR #11's branch holds unchosen logo/og candidates.

## Design system

- Colors (all in `theme.css`): bg `#162013` deep forest green, text
  `#e8efe6` sage, muted `#7a927a`, accent `#e8c860` warm gold. Gold is for
  marks/emphasis (headwords, sense numbers, active states).
- Type: Hanuman (Google Fonts, weights 300/400/700), Georgia fallback —
  also used inside the SVG logo assets.
- The logo is a two-tile Scrabble rack (S₁ T₁), tiles tilted −5°/+4° so
  they read hand-placed. It lives two places, deliberately not shared:
  `public/favicon.svg` (square canvas) and an inline copy in `Nav.astro`
  with the viewBox cropped to the tiles (`0 7.5 32 17.5`) and rects filled
  with `currentColor` so the link hover shifts gold→sage.
  Don't swap the inline copy for the favicon `<img>` — the square
  canvas's dead space renders it undersized (that was a shipped bug).
- Optical alignment: the top-bar mark carries `translateY(-2px)`
  because dead-centering an icon next to text reads as too low. Keep such
  nudges; they're intentional, not drift.

## Gotchas

- Scrabble point values on tiles must be real letter scores (S=1, T=1…);
  `src/content/scrabble.js` has the score table. The og board uses true
  premium-square positions from a standard 15×15 board — if you move the
  words, keep the play legal-looking (opening word covers the center star).
- The interpunct syllable dots in headwords are `aria-hidden` spans so
  screen readers hear the name, not the breaks — preserve that pattern.
- Watercolor: don't paint a soft gradient as dozens of faint glazes —
  each one rounds up to the smallest 8-bit alpha near its edge and they
  stack into a visible ring (the moon glow uses 3 strong glazes instead).
  Flat, wide shapes need low edge wobble or they throw tall spikes.
- `og:image` meta in `index.astro` points at `/og-image.png` with explicit
  width/height hints (currently 2400×1260, a 2x render) — keep the hints in
  sync if you regenerate the image.
