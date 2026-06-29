# personal-site

A dictionary-inspired personal site. Single-page React app built with Vite.

## Stack

- **Vite + React** — fast dev server, zero-config build, auto-detected by Vercel
- **CSS Modules** — scoped, real CSS per component (`*.module.css`)
- **Design tokens** — all colors, type, and spacing live in `src/styles/theme.css`

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
| Colors / fonts / spacing | `src/styles/theme.css` |
| Site copy (name, nav, definitions) | `src/content.js` |
| Page layout | `src/App.jsx`, `src/App.module.css` |
| Components | `src/components/` |

To re-skin the site, edit the tokens in `theme.css` — nothing else hardcodes
colors or fonts.
