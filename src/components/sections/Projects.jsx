import Headword from '../ui/Headword.jsx'
import styles from './Projects.module.css'

const projects = [
  {
    name: 'polymarket trader visualization',
    pos: 'n.',
    def: 'a k-means analysis of millions of polymarket trades; clusters active traders into behavioral archetypes — i.e. gamblers, grinders, and specialists — and exposes them through a configurable d3 scatterplot with per-trader tooltips.',
    stack: 'Python · D3.js',
    links: [
      { label: 'site', href: 'https://virtualme64.github.io/polymarket-trader-analysis/viz/' },
      { label: 'source', href: 'https://github.com/VirtualMe64/polymarket-trader-analysis' },
      { label: 'doc', href: 'https://github.com/VirtualMe64/polymarket-trader-analysis/blob/main/DOC/team010poster.pdf' },
      { label: 'report', href: 'https://github.com/VirtualMe64/polymarket-trader-analysis/blob/main/DOC/report.pdf'}
    ],
  }
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
                    <span className={styles.seeAlso}>
                      see also:{' '}
                      {project.links.map((link, i) => (
                        <span key={link.label}>
                          <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                          {i < project.links.length - 1 && ', '}
                        </span>
                      ))}
                    </span>
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
