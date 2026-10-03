// Site-wide content: the slide list (which drives the nav, the slide
// counter, and each slide's title + ghost watermark) and the contact links.

export const sections = [
  { id: 'home', label: 'Home', ghost: ['hi,', "i'm", 'sammy'] },
  { id: 'about', label: 'About', title: 'Software Engineer', ghost: ['sammy', 'taubman'] },
  { id: 'experience', label: 'Experience', title: 'Experience', ghost: ['where', "i've", 'been'] },
  { id: 'projects', label: 'Projects', title: 'Projects', ghost: ['things', "i've", 'made'] },
  { id: 'contact', label: 'Contact', title: 'Say Hello', ghost: ['see', 'ya!'] },
]

export const getSection = (id) => sections.find((s) => s.id === id)

export const contact = [
  { label: 'Email', href: 'mailto:staubman1@gmail.com', display: 'staubman1@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sammytaubman/', display: 'linkedin.com/in/sammytaubman', external: true },
  { label: 'GitHub', href: 'https://github.com/VirtualMe64', display: 'github.com/VirtualMe64', external: true },
]
