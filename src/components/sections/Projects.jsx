import Headword from '../ui/Headword.jsx'
import styles from './Projects.module.css'

const projects = [
  {
    name: 'lexica',
    pos: 'n.',
    def: 'a word-game trainer that drills high-value scrabble plays; designed to build pattern recognition and vocabulary under competitive conditions.',
    stack: 'React · TypeScript',
    href: 'https://github.com/VirtualMe64',
    cite: 'github',
  },
  {
    name: 'this entry',
    pos: 'n.',
    def: 'the dictionary-themed personal site you are reading right now; an experiment in making résumé content feel like reference material.',
    stack: 'React · Vite',
    href: 'https://github.com/VirtualMe64/my-site',
    cite: 'source',
  },
  {
    name: 'signals',
    pos: 'n.',
    def: 'a small service for watching how systems behave under load; exposes metrics and visualizes request patterns over time.',
    stack: 'Go · Postgres',
    href: 'https://github.com/VirtualMe64',
    cite: 'github',
  },
]

const rows = []
for (let i = 0; i < projects.length; i += 2) rows.push(projects.slice(i, i + 2))

export default function Projects() {
  return (
    <section id="projects">
      <div className={styles.projects}>
        <Headword pos="n. pl.">
          proj<span aria-hidden="true">·</span>ects
        </Headword>
        <p className={styles.gloss}>things i've made.</p>
        <div className={styles.grid}>
          {rows.map((row, i) => (
            <div key={i} className={styles.row}>
              {row.map((project) => (
                <article key={project.name} className={styles.card}>
                  <div className={styles.cardHead}>
                    <span className={styles.name}>{project.name}</span>
                    <span className={styles.pos}>{project.pos}</span>
                  </div>
                  <p className={styles.def}>{project.def}</p>
                  <footer className={styles.cardFoot}>
                    <span className={styles.stack}>{project.stack}</span>
                    <a className={styles.seeAlso} href={project.href} target="_blank" rel="noreferrer">
                      see also: {project.cite}
                    </a>
                  </footer>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
