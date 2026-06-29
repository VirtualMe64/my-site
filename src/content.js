/*
 * content.js — all site copy in one place, separate from layout/styling.
 * Edit text here; components render whatever this exports.
 */

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const entry = {
  // syllables render joined by interpunct dots: sam·my taub·man
  syllables: ['sam', 'my', ' taub', 'man'],
  // a space at the start of a syllable becomes a word break (no dot before it)
  pronunciation: '',
  partOfSpeech: '',
  definitions: [
    'some copy about being a coder',
    'some copy about being interested in stuff',
    'some copy about liking work games',
  ],
}
