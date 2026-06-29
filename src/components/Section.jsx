import styles from './Section.module.css'

// Shared layout for every page section: full viewport height, content
// vertically centered and offset from the divider. Each section's own
// component supplies the content.
export default function Section({ id, children }) {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  )
}
