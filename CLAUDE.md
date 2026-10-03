# CLAUDE.md

Personal site for Sammy Taubman — staubman.vercel.app. Static Astro site,
one page, no framework JS beyond two small inline scripts (scroll-spy nav,
Scrabble word-of-the-day). Visual style: a "paper poster" (warm off-white,
uppercase sans titles, giant ghost watermark words, red-pen annotations),
adapted from a GT FSA eboard Instagram carousel.

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
  (mobile)** — the main breakpoint is **640px**; the hero also restacks
  at 960px. Google Fonts won't load in headless Chromium through the
  sandbox proxy — route font requests through `curl` in the script.

## Concept: the whole site is a dictionary

Every design decision extends one bit: the page is a dictionary entry for
"Sam·my Taub·man, *n. proper*". Sections are entries with headwords,
part-of-speech tags, numbered senses, and "See also" cross-references.
The other identity thread is **Scrabble** (sense 4 of the hero): tile-rack
logo, word-of-the-day footer, Scrabble-board og image. New features should
speak one of those two languages.

## Layout

- `src/content/site.js` — the `sections` list drives BOTH the sidebar nav
  and section headers (single source of truth); also contact links. Other
  content lives in `src/content/{roles,projects,scrabble}.js`. The hero's
  text is deliberately inline in `Entry.astro` instead.
- `src/styles/theme.css` — shared design tokens only. One-off values stay
  inline in the component that uses them (deliberate convention).
- `src/components/` — Nav (sticky top bar + logo), Entry (hero), Section/
  Experience/Projects/Contact, Footer (word of the day).
- `design/` — **not part of the build.** Generator HTML + candidates for
  brand assets: `design/og-alternatives/og.html` regenerates the og image
  (open in a browser, screenshot frame `#d` at 2x → `public/og-image.png`);
  the same folder on PR #11's branch holds unchosen logo/og candidates.

## Design system

- Colors (all in `theme.css`): bg `#f7f5f0` warm paper (with an inline
  SVG noise grain), ink `#1f1e1c`, muted `#77746e`, ghost `#e9e6df`
  (watermark words, dot-matrix), accent `#a8363a` oxblood, tile `#efe4c8`.
  Red is the "hand" layer only: annotations, `[ bracket ]` captions, the
  signature, active nav brackets.
- Type: Poppins (titles uppercase + letter-spaced, body 300/400), Caveat
  for red-pen notes, Sacramento for the signature. Tiles use Georgia.
- Poster vocabulary (global classes in `global.css`): `.bracket` red
  bracket captions, `.box` boxed numerals for senses/list items, `.note` +
  `.scribble` hand annotations (always `aria-hidden`; strokes use the
  `#wobble` SVG filter defined once in `Entry.astro`). Section watermarks
  stack the headword's syllables one per line (`ex / pe / ri / ence`).
- The logo is a two-tile Scrabble rack (S₁ T₁), tiles tilted −5°/+4° so
  they read hand-placed. It lives two places, deliberately not shared:
  `public/favicon.svg` (square canvas, oxblood tiles) and an inline copy in
  `Nav.astro` with the viewBox cropped to the tiles (`0 7.5 32 17.5`)
  and rects filled with `currentColor` so the link hover shifts ink→red.
  Don't swap the inline copies for the favicon `<img>` — the square
  canvas's dead space renders it undersized (that was a shipped bug).
- Optical alignment: the nav-bar mark carries `translateY(-2px)`
  because dead-centering an icon next to text reads as too low. Keep such
  nudges; they're intentional, not drift.

## Gotchas

- Scrabble point values on tiles must be real letter scores (S=1, T=1…);
  `src/content/scrabble.js` has the score table. The og board uses true
  premium-square positions from a standard 15×15 board — if you move the
  words, keep the play legal-looking (opening word covers the center star).
- The interpunct syllable dots in headwords are `aria-hidden` spans so
  screen readers hear the name, not the breaks — preserve that pattern.
- `og:image` meta in `index.astro` points at `/og-image.png` with explicit
  width/height hints (currently 2400×1260, a 2x render) — keep the hints in
  sync if you regenerate the image.
