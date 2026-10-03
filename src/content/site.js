// Site-wide content: the section index (which drives both the top bar and
// each section's dictionary-entry header) and the contact links. The hero's
// text lives inline in Entry.astro.

export const sections = [
  { id: 'home', label: 'Home' }, // hero — rendered by Entry.astro, not Section.astro
  { id: 'experience', label: 'Experience', word: 'ex·pe·ri·ence', pos: 'n.', gloss: "Places I've worked." },
  { id: 'projects', label: 'Projects', word: 'proj·ects', pos: 'n. pl.', gloss: "Things I've made." },
  { id: 'contact', label: 'Contact', word: 'con·tact', pos: 'v.', gloss: 'To get in touch with.' },
]

export const getSection = (id) => sections.find((s) => s.id === id)

export const contact = [
  { label: 'Email', href: 'mailto:staubman1@gmail.com', display: 'staubman1@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sammytaubman/', display: 'linkedin.com/in/sammytaubman', external: true },
  { label: 'GitHub', href: 'https://github.com/VirtualMe64', display: 'github.com/VirtualMe64', external: true },
]
