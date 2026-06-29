import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.sidebar} aria-label="Primary">
      <span className={styles.section}>Index</span>
      <ul className={styles.list}>
        <li><a className={styles.link} href="#home">Home</a></li>
        <li><a className={styles.link} href="#experience">Experience</a></li>
        <li><a className={styles.link} href="#projects">Projects</a></li>
        <li><a className={styles.link} href="#skills">Skills</a></li>
        <li><a className={styles.link} href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
