# personal-site

A dictionary-inspired personal site. Single-page React app built with Vite.

Each section is styled as a dictionary entry (headword + interpunct syllables +
part-of-speech), stacked one viewport tall, with a sticky sidebar index. The
sections are Home, Experience, Projects, Skills, and Contact.

## Stack

- **Vite + React** — fast dev server, zero-config build, auto-detected by Vercel
- **CSS Modules** — scoped, real CSS per component (`*.module.css`)
- **Design tokens** — shared colors + the font live in `src/styles/theme.css`; one-off values stay inline in each component
- **Subtle motion** — scroll-reveal fade-ups, active-nav tracking, and smooth-scroll, all disabled under `prefers-reduced-motion`

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the build locally
```

## Where things live

| What | File |
| --- | --- |
| Shared colors + font | `src/styles/theme.css` |
| Page layout + section order | `src/App.jsx`, `src/App.module.css` |
| Section components | `src/components/` (Entry, Experience, Projects, Skills, Contact) |
| Shared building blocks | `Section`, `Heading`, `Reveal`, `Sidebar` |
| Scroll-spy nav | `src/hooks/useActiveSection.js` |

To recolor or change the font, edit the tokens in `theme.css` — nothing else
hardcodes a color or the font family.
