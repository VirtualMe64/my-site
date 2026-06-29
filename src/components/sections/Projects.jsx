import Headword from '../ui/Headword.jsx'
import styles from './Projects.module.css'

const projects = [
  {
    name: 'Polymarket Trader Visualization',
    pos: 'n.',
    def: 'A k-means analysis of millions of Polymarket trades; clusters active traders into behavioral archetypes — i.e. gamblers, grinders, and specialists — and exposes them through a configurable D3 scatterplot with per-trader tooltips.',
    stack: 'Python · D3.js',
    links: [
      { label: 'site', href: 'https://virtualme64.github.io/polymarket-trader-analysis/viz/' },
      { label: 'source', href: 'https://github.com/VirtualMe64/polymarket-trader-analysis' },
      { label: 'doc', href: 'https://github.com/VirtualMe64/polymarket-trader-analysis/blob/main/DOC/team010poster.pdf' },
      { label: 'report', href: 'https://github.com/VirtualMe64/polymarket-trader-analysis/blob/main/DOC/report.pdf'}
    ],
  },
  {
    name: 'RL Soccer Agent',
    pos: 'n.',
    def: 'Via reward shaping and experimenting with neural network architecture, we trained a model to play a simple 2v2 game of soccer faster and more effectively than a baseline model. The agent wins 79.5% of episodes against the baseline, even after training for a similar amount of time.',
    stack: 'Python · RLlib',
    links: [
      { label: 'source', href: 'https://github.com/VirtualMe64/soccer-twos-starter/tree/main' },
      { label: 'report', href: 'https://github.com/VirtualMe64/soccer-twos-starter/blob/main/report.pdf' }
    ]
  },
  {
    name: 'Authorship Attribution via AI Stylometry',
    pos: 'n.',
    def: 'Created and evaluated a pipeline to classify authorship of a text using a neural net trained via triplet loss. Achieves 84% accuracy on a 50-author victorian work dataset, amd 99.8% accuracy on a human vs. ai dataset.',
    stack: 'Python · PyTorch',
    links: [
      { label: 'source', href: 'https://github.com/VirtualMe64/cs7643-style2vec' },
      { label: 'report', href: 'https://github.com/VirtualMe64/cs7643-style2vec/blob/main/report.pdf' },
    ]
  },
  {
    name: 'Sprint Analysis Dashboard',
    pos: 'n.',
    def: <>As a Junior Design project with <a href="https://demotu.org" target="_blank" rel="noreferrer">Demotu</a>, created an analysis pipeline and dashboard to analyze the gait and form of a sprinter. Placed 3rd out of ~50 student groups in the final showcase. <em>Source not available due to confidentiality agreement with Demotu.</em></>,
    stack: 'Python · React',
    links: [ {
      label: 'article', href: 'https://www.cc.gatech.edu/news/student-innovation-shines-spring-2025-cs-junior-design-capstone-expo#3rd'
    } ]
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
                    <span className={styles.name}>{project.name} <span className={styles.pos}>{project.pos}</span></span>
                  </div>
                  <p className={styles.def}>{project.def}</p>
                  <footer className={styles.cardFoot}>
                    <span className={styles.stack}>{project.stack}</span>
                    <span className={styles.seeAlso}>
                      See also:{' '}
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
