// Converts the Markdown-style [text](url) links used in content strings into
// anchors. All linked content is external, so links open in a new tab. Other
// inline HTML in content strings (<em>, <br />) passes through untouched.
// Runs at build time only — nothing here ships to the browser.
export function md(text) {
  return text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, label, href) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`,
  )
}
