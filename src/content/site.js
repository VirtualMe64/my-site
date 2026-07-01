// Site-wide content: head metadata, the section index (which drives both the
// sidebar and each section's dictionary-entry header), the hero definitions,
// and the contact links. Components render this; edit here to change the site.

export const meta = {
  title: 'Sammy Taubman',
  description: 'Sammy Taubman — a software engineer at Stripe, helping agents pay for things.',
  url: 'https://staubman.vercel.app/',
  ogImage: 'https://staubman.vercel.app/og-image.png',
}

export const sections = [
  { id: 'home', label: 'Home' }, // hero — rendered by Entry.astro, not Section.astro
  { id: 'experience', label: 'Experience', word: 'ex·pe·ri·ence', pos: 'n.', gloss: "places i've worked." },
  { id: 'projects', label: 'Projects', word: 'proj·ects', pos: 'n. pl.', gloss: "things i've made." },
  { id: 'contact', label: 'Contact', word: 'con·tact', pos: 'n.', gloss: 'ways to reach me.' },
]

export const getSection = (id) => sections.find((s) => s.id === id)

export const hero = {
  pos: 'n. proper',
  definitions: [
    'a software engineer at Stripe, helping agents pay for things',
    'a programmer with 10 years of experience who is passionate about learning how things work',
    'a former Georgia Tech student and current Georgia Tech football fan',
    'a lover of word games, especially Scrabble',
  ],
}

export const contact = [
  { label: 'Email', href: 'mailto:staubman1@gmail.com', display: 'staubman1@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sammytaubman/', display: 'linkedin.com/in/sammytaubman', external: true },
  { label: 'GitHub', href: 'https://github.com/VirtualMe64', display: 'github.com/VirtualMe64', external: true },
]
