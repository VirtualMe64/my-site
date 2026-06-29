import Section from './Section.jsx'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <Section id="experience">
      <div className={styles.experience}>
        <h2 className={styles.heading}>
          ex<span aria-hidden="true">·</span>pe<span aria-hidden="true">·</span>ri<span aria-hidden="true">·</span>ence
          <span className={styles.pos}>n.</span>
        </h2>

        <ol className={styles.roles}>
          <li className={styles.role}>
            <div className={styles.roleHead}>
              <span className={styles.roleTitle}>Senior Software Engineer</span>
              <span className={styles.roleMeta}>Company · 2021–present</span>
            </div>
            <p className={styles.roleDesc}>
              placeholder summary of what you built and owned here.
            </p>
          </li>

          <li className={styles.role}>
            <div className={styles.roleHead}>
              <span className={styles.roleTitle}>Software Engineer</span>
              <span className={styles.roleMeta}>Company · 2018–2021</span>
            </div>
            <p className={styles.roleDesc}>
              placeholder summary of what you built and owned here.
            </p>
          </li>

          <li className={styles.role}>
            <div className={styles.roleHead}>
              <span className={styles.roleTitle}>Junior Engineer</span>
              <span className={styles.roleMeta}>Company · 2016–2018</span>
            </div>
            <p className={styles.roleDesc}>
              placeholder summary of what you built and owned here.
            </p>
          </li>
        </ol>
      </div>
    </Section>
  )
}
