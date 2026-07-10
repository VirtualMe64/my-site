# TODO

Running list of open threads and ideas for the site. Edit freely — future
Claude sessions read this (it's linked from CLAUDE.md), so keeping it
current is the easiest way to carry context between sessions.

## Open threads

- [ ] **Decide the desktop navbar** (PR #11): large standalone rack icon
      vs. the current gold "Sam·my" wordmark. Sammy wasn't fully convinced
      by the icon-only version — needs a look on a real desktop screen.
      Options if neither wins outright: icon + wordmark together, or a
      smaller icon above the wordmark.
- [ ] **Clean up `design/` once decided**: delete the unchosen logo
      candidates (`design/logo-alternatives/`) and fold anything worth
      keeping into the repo proper. Keep `design/og-alternatives/og.html`
      (the og-image generator) either way.

## Ideas to consider

Brand / dictionary-theme extensions:

- [ ] **Pronunciation on the headword**: a small /ˈsæmi ˈtaʊbmən/ after
      the hero headword — maybe clickable to play audio. Very dictionary.
- [ ] **404 page as a dictionary entry**: "not found, *adj.* — see
      [home](/)". Cheap to build, high charm.
- [ ] **"Print edition"**: a print stylesheet (or a styled PDF resume
      link) — the dictionary conceit translates naturally to paper.
- [ ] **Scrabble easter egg**: score any word you type against the letter
      values in `src/content/scrabble.js`, or draggable tiles somewhere.

Practical / plumbing:

- [ ] **apple-touch-icon**: iOS home-screen bookmarks currently have no
      PNG icon — render the rack tiles to a 180×180 PNG and add the meta.
- [ ] **Self-host the Hanuman font**: drops the Google Fonts round-trip
      (and its brief flash of fallback Georgia) for a faster first paint.
- [ ] **Word-of-the-day archive/link**: make the footer word clickable —
      even just linking to a dictionary definition.
- [ ] **Analytics**: something privacy-light (e.g. Vercel Analytics) to
      see whether anyone actually visits.
- [ ] **Writing section**: if blogging ever appeals, posts fit the theme
      as "usage notes" or numbered senses under a *writings, n. pl.* entry.
