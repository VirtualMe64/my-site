import Section from './Section.jsx'
import styles from './Entry.module.css'

export default function Entry() {
  return (
    <Section id="home">
      <div className={styles.entry}>
        <h1 className={styles.headword}>
          sam<span aria-hidden="true">·</span>my
          {' '}
          taub<span aria-hidden="true">·</span>man
        </h1>

        <p className={styles.definitions}>
          <span className={styles.num}>1.</span> a programmer with 10 years of experience{' '}
          <span className={styles.num}>2.</span> a tinkerer who needs to know how things works{' '}
          <span className={styles.num}>3.</span> a former georgia tech student and current georgia tech football fan{' '}
          <span className={styles.num}>4.</span> a lover of word games, especially scrabble
        </p>
      </div>
    </Section>
  )
}
