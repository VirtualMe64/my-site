# personal-site

A dictionary-inspired personal site. Single-page React app built with Vite.

## Stack

- **Vite + React** — fast dev server, zero-config build, auto-detected by Vercel
- **CSS Modules** — scoped, real CSS per component (`*.module.css`)
- **Design tokens** — shared colors + the font live in `src/styles/theme.css`; one-off values stay inline in each component

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
| Page layout | `src/App.jsx`, `src/App.module.css` |
| Components | `src/components/` |

To recolor or change the font, edit the tokens in `theme.css` — nothing else
hardcodes a color or the font family.
