# personal-site

A dictionary-inspired personal site, built with Astro as a fully static page.

Each section is styled as a dictionary entry (headword + interpunct syllables +
part-of-speech), stacked one viewport tall, with a sticky sidebar index. The
sections are Home, Experience, Projects, and Contact.

## Stack

- **Astro** — components render to plain HTML at build time; the only client
  JavaScript is two small inline scripts (scroll-spy nav, word of the day)
- **Content as data** — everything the site *says* lives in `src/content/`;
  components are presentation only
- **Scoped styles** — each `.astro` component carries its own `<style>` block;
  shared rules (headwords, link hovers) live in `src/styles/global.css`
- **Design tokens** — colors, the font, and the full type scale (including the
  mobile sizes) live in `src/styles/theme.css`
- **Subtle motion** — active-nav tracking and smooth-scroll, disabled under
  `prefers-reduced-motion`

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build -> dist/
npm run preview  # preview the build locally
```

## Where things live

| What | File |
| --- | --- |
| Work history | `src/content/roles.js` |
| Projects | `src/content/projects.js` |
| Section index, contact links | `src/content/site.js` |
| Scrabble word list + scoring | `src/content/scrabble.js` |
| Colors, font, type scale | `src/styles/theme.css` |
| Global baseline + shared headword/link styles | `src/styles/global.css` |
| Page head (title, description, OG tags) + layout + section order | `src/pages/index.astro` |
| Dictionary-entry section shell | `src/components/Section.astro` |
| Hero — hand-rolled `<h1>` and definitions, literal markup by design | `src/components/Entry.astro` |
| Scroll-spy nav | `src/components/Sidebar.astro` (inline `<script>`) |
| Word of the day | `src/components/Footer.astro` (inline `<script>`) |
| `[text](url)` link rendering for content strings | `src/lib/md.js` |

Updating the resume means editing `src/content/` — with one deliberate
exception: the hero's text is literal markup in `Entry.astro`. Role and
project descriptions support Markdown-style `[text](url)` links (converted at
build time; external links get `target`/`rel` automatically) plus literal
`<em>`/`<br />` where needed.

To recolor, change the font, or resize type — desktop or mobile — edit the
tokens in `theme.css`; nothing else hardcodes a color, the font family, or a
font size.
