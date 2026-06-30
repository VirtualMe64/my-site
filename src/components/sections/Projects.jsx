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
    def: 'A reinforcement learning agent that plays a simple 2v2 game of soccer, trained via reward shaping and neural network architecture experiments. Wins 79.5% of episodes against a baseline model, even after training for a similar amount of time.',
    stack: 'Python · RLlib',
    links: [
      { label: 'source', href: 'https://github.com/VirtualMe64/soccer-twos-starter/tree/main' },
      { label: 'report', href: 'https://github.com/VirtualMe64/soccer-twos-starter/blob/main/report.pdf' }
    ]
  },
  {
    name: 'Authorship Attribution via AI Stylometry',
    pos: 'n.',
    def: 'A pipeline that classifies the authorship of a text using a neural net trained via triplet loss. Achieves 84% accuracy on a 50-author Victorian-era dataset, and 99.8% accuracy on a human vs. AI dataset.',
    stack: 'Python · PyTorch',
    links: [
      { label: 'source', href: 'https://github.com/VirtualMe64/cs7643-style2vec' },
      { label: 'report', href: 'https://github.com/VirtualMe64/cs7643-style2vec/blob/main/report.pdf' },
    ]
  },
  {
    name: 'Sprint Analysis Dashboard',
    pos: 'n.',
    def: <>An analysis pipeline and dashboard for sprinter gait and form, built as a Junior Design project with <a href="https://demotu.org" target="_blank" rel="noreferrer">Demotu</a>. Placed 3rd out of ~50 student groups in the final showcase. <em>Source not available due to confidentiality agreement with Demotu.</em></>,
    stack: 'Python · React',
    links: [ {
      label: 'article', href: 'https://www.cc.gatech.edu/news/student-innovation-shines-spring-2025-cs-junior-design-capstone-expo#3rd'
    } ]
  },
  {
    name: 'Flux Slides',
    pos: 'n.',
    def: 'A developer-first slideshow app allowing you to make presentations using Markdown and LaTeX, built on a custom written Markdown parser.',
    stack: 'TypeScript · Svelte',
    links: [
      { label: 'site', href: 'https://flux-slides.vercel.app/' }
    ]
  },
  {
    name: 'Advent of FPGA',
    pos: 'n.',
    def: <>A collection of hardware implementations and writeups solving 8 of 12 Advent of Code 2025 problems, written in Hardcaml as part of Jane Street's <a href="https://blog.janestreet.com/advent-of-fpga-challenge-2025/" target="_blank" rel="noreferrer">'Advent of FPGA' challenge</a>.</>,
    stack: 'OCaml · Hardcaml',
    links: [
      { label: 'source', href: 'https://github.com/VirtualMe64/aoc-hardcaml' }
    ]
  },
  {
    name: 'SwingML',
    pos: 'n.',
    def: 'A platform that uses computer vision to analyze and improve baseball swings. Built and deployed the Python analysis pipeline: video passes through an AI keypoint model, gets projected into 3D, and is distilled into 20+ actionable metrics.',
    stack: 'Python',
    links: [
      { label: 'site', href: 'https://www.swingml.com/' },
      { label: 'app', href: 'https://apps.apple.com/us/app/swing-ml/id1628224493' }
    ]
  },
  {
    name: 'KinetixML',
    pos: 'n.',
    def: <>A platform to help developers create and deploy computer vision workflows. Built the node-based pipeline editor in TypeScript and Svelte, and published a Python library implementing 40+ pipeline-component modules using OpenCV, Roboflow, and MediaPipe. <em>Deprecated</em></>,
    stack: 'TypeScript · Svelte · Python',
    links: [
      { label: 'site', href: 'https://kml-platform.vercel.app/' },
      { label: 'python-lib', href: 'https://github.com/Kinetix-ML/kml-pipe-py' }
    ]
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
