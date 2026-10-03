# CLAUDE.md

Personal site for Sammy Taubman — staubman.vercel.app. Static Astro site,
one page, no framework JS beyond two small inline scripts (scroll-spy nav,
Scrabble word-of-the-day). Visual style: restrained and typographic — deep
green, warm ivory, one gold accent, a big serif headword, and a black-and-
white portrait in the hero. Hierarchy comes from type and space, not
decoration; resist adding colors, boxes, or grids.

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
  (mobile)** — breakpoints at **900px** (hero and sections stack) and
  **640px**.
  Google Fonts won't load in headless Chromium through the sandbox proxy —
  route font requests through `curl` in the script.

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
- `src/styles/theme.css` — shared design tokens only. One-off values stay
  inline in the component that uses them (deliberate convention).
- `src/components/` — Nav (sticky top bar: rack logo, name, links with a
  gold underline on the current section), Entry (hero: headword, senses,
  "See also", portrait standing on the bottom rule), Section (number +
  headword + gloss in a sticky left column)/Experience/Projects/Contact,
  Footer (word of the day).
- `public/me.webp` — the hero portrait: cut out of a night photo (other
  people masked out), converted to a warm black-and-white print, legs faded
  to transparent so it dissolves into the section rule. Regenerate rather
  than hand-edit if the photo changes.
- `design/` — **not part of the build.** Generator HTML + candidates for
  brand assets: `design/og-alternatives/og.html` regenerates the og image
  (open in a browser, screenshot frame `#d` at 2x → `public/og-image.png`);
  the same folder on PR #11's branch holds unchosen logo/og candidates.

## Design system

- Colors (all in `theme.css`): bg `#111d16` deep green, text `#ece6d8`
  warm ivory, muted `#94a397`, hairline rules at 13% ivory, accent
  `#d6b25e` muted gold. Gold is for marks only: headword syllable dots,
  sense numerals, the current-nav underline, "Current", the word of the day.
- Type: Instrument Serif (headwords, names, numerals, italic pos tags) and
  Instrument Sans (everything else; `.label` is its small-caps style). Two
  faces only. Instrument Serif's "1" reads as "l", so digits in large serif
  text that must be unambiguous (the contact email) are set in the sans.
- The logo is a two-tile Scrabble rack (S₁ T₁), tiles tilted −5°/+4° so
  they read hand-placed. It lives two places, deliberately not shared:
  `public/favicon.svg` (square canvas, gold tiles) and an inline copy in
  `Nav.astro` with the viewBox cropped to the tiles (`0 7.5 32 17.5`).
  Don't swap the inline copies for the favicon `<img>` — the square
  canvas's dead space renders it undersized (that was a shipped bug).
- Optical alignment: the top-bar mark carries `translateY(-1px)`
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
