# CLAUDE.md

Personal site for Sammy Taubman — staubman.vercel.app. Static Astro site,
one page, no framework JS beyond two small inline scripts (scroll-spy nav,
Scrabble word-of-the-day). Visual style: "the board" — Scrabble-board green,
cream tile cards, premium-square accents, and a cutout photo in the hero.

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
  (mobile)** — breakpoints at **960px** (hero stacks) and **640px**.
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
  and section headers (single source of truth); also the hero's stat strip
  and contact links. Other
  content lives in `src/content/{roles,projects,scrabble}.js`. The hero's
  text is deliberately inline in `Entry.astro` instead.
- `src/styles/theme.css` — shared design tokens only. One-off values stay
  inline in the component that uses them (deliberate convention).
- `src/components/` — Nav (sticky top bar: rack logo, links, "Say hi"),
  Entry (hero: entry + photo rising out of a 5×5 board + SAMMY tile arc +
  stat strip), Section (dictionary header in a sticky left column)/
  Experience (timeline)/Projects (tile cards)/Contact, Footer (word of the
  day as tiles).
- `public/me-cutout.webp` — the hero photo, background removed and
  touched up (cut from a night shot; other people masked out).
- `design/` — **not part of the build.** Generator HTML + candidates for
  brand assets: `design/og-alternatives/og.html` regenerates the og image
  (open in a browser, screenshot frame `#d` at 2x → `public/og-image.png`);
  the same folder on PR #11's branch holds unchosen logo/og candidates.

## Design system

- Colors (all in `theme.css`): board green `#12382a` with a faint 48px
  grid, deep `#0d2b20` for recessed bands, cream `#f3e9d2` text/tiles,
  sage `#9fb8a8` muted. Accents are the four premium squares: TW
  `#e0604f` (primary: buttons, "now", headword dots), DW `#f2a99c`, DL
  `#9fcfe6`, TL `#3d7fc4`.
- Type: Fraunces (headwords, names), Instrument Sans (body), JetBrains
  Mono (metadata: dates, pos tags, labels). The SVG logo uses Georgia.
- Tiles (`.tile` in `global.css`): cream face + a darker lip below for
  thickness. Project cards are big tiles; each corner tile is the name's
  initial with its real letter score.
- The hero board is the real 5×5 around the center star of a 15×15 board
  (TL corners, DL diagonals, ★ center) — keep it legal if you edit it.
- The logo is a two-tile Scrabble rack (S₁ T₁), tiles tilted −5°/+4° so
  they read hand-placed. It lives two places, deliberately not shared:
  `public/favicon.svg` (square canvas, TW-red tiles) and an inline copy
  in `Nav.astro` with the viewBox cropped to the tiles (`0 7.5 32 17.5`),
  cream tiles.
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
