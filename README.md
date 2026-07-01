# personal-site

A dictionary-inspired personal site, built with Astro as a fully static page.

Each section is styled as a dictionary entry (headword + interpunct syllables +
part-of-speech), stacked one viewport tall, with a sticky sidebar index. The
sections are Home, Experience, Projects, and Contact.

## Stack

- **Astro** — components render to plain HTML at build time; the only client
  JavaScript is two small inline scripts (scroll-spy nav, word of the day)
- **Scoped styles** — each `.astro` component carries its own `<style>` block
- **Design tokens** — shared colors + the font live in `src/styles/theme.css`;
  one-off values stay inline in each component
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
| Shared colors + font | `src/styles/theme.css` |
| Global baseline styles | `src/styles/global.css` |
| Page head + layout + section order | `src/pages/index.astro` |
| Section components | `src/components/` (Entry, Experience, Projects, Contact) |
| Shared headword styling | `src/components/Headword.astro` |
| Scroll-spy nav | `src/components/Sidebar.astro` (inline `<script>`) |
| Scrabble word of the day | `src/components/Footer.astro` + `src/data/scrabble.js` |

To recolor or change the font, edit the tokens in `theme.css` — nothing else
hardcodes a color or the font family.
