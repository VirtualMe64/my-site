# TODO

Running list of things to work on. Edit freely — future Claude sessions
read this (it's linked from CLAUDE.md), so keep it current.

- [ ] **Rework the copy**, particularly the header/hero section.
- [ ] **Consider adding more animation.**
- [ ] **Consider a textured background** — a paper pattern, Scrabble grid,
      blueprint; that kind of vibe.
- [ ] **Consider expanding the projects section**, maybe including
      screenshots.
- [ ] **Improve the navbar**, and decide what to do with the wordmark
      (PR #11 has the icon-only desktop experiment).
- [ ] **Maybe add an image to the entry** (hero section).

## From the July 2026 review

Findings from a full read + build + screenshot pass at 1440px and 390px.
Roughly highest-impact first.

- [ ] **Mobile nav scrolls away and never comes back.** The bar is
      `position: static` (`Sidebar.astro`, the 640px block), so past the
      hero there's no nav at all for the remaining three sections —
      measured at −1262px off-screen after a 1400px scroll. Desktop's
      `.rail` is sticky, so the two widths disagree. Wants
      `position: sticky; top: 0` plus an opaque background, since content
      would scroll under it. Folds into the "improve the navbar" item.
- [ ] **Mobile hero: dead space below, wall of text above.** Bottom ~45%
      of the first screen is empty (`#home` is `100svh` with
      `justify-content: flex-start` + `padding-top: 10rem`), while the
      senses run together into one gray block — `Entry.astro` flips
      `.definitions li` to `display: inline` under 640px. Stacking them on
      mobile too would fix scanability; the empty half is the natural home
      for the hero image idea above.
- [ ] **`viewport-fit=cover` is set with no safe-area insets.**
      `index.astro:18` opts into drawing under the notch/home indicator,
      but nothing in the CSS uses `env(safe-area-inset-*)`. Either drop
      the flag or pad for it.
- [ ] **Odd project count breaks the grid.** `Projects.astro` chunks into
      rows of two; a 9th project leaves an empty half-cell with the centre
      rule and top border running past nothing (verified by simulation).
      Let a lone last card span both columns, or drop the rule on a
      one-child row.
- [ ] **Project names aren't headings.** The whole page outline is one
      `<h1>` and three `<h2>`s — the eight project names are
      `<p class="name">`, so there's no way to jump between them with a
      screen reader. `<h3>` would cost nothing visually.
- [ ] **Word of the day flashes the wrong word.** The static HTML bakes
      `words[0]` ("AA") and the inline script swaps it on load. Baking the
      *build-date* word instead would be right most of the time.
- [ ] **Head metadata gaps:** no `rel="canonical"`, no `theme-color` (the
      forest green in a mobile address bar is free brand), no JSON-LD
      `Person`, no `robots.txt`/sitemap.
- [ ] **Tense drift, self-resolving.** Hero sense 1 and the meta
      description say "a software engineer at Stripe" while `roles.js` says
      "Incoming August 2026". True from August.
- [ ] **`OXYPHENBUTAZONE`'s definition is missing its full stop** —
      `scrabble.js:45`, the only one of the 40 without one.
- [ ] **Link rot unchecked.** The sandbox's network policy blocked all 31
      outbound URLs, so none were verified. Worth a link check run locally.
