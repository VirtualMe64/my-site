import styles from './Entry.module.css'

export default function Entry() {
  return (
    <section id="home" className={styles.entry}>
      <h1 className={styles.headword}>
        sam<span aria-hidden="true">·</span>my
        {' '}
        taub<span aria-hidden="true">·</span>man
      </h1>

      <p className={styles.definitions}>
        <span className={styles.num}>1.</span> a programmer with 10 years of experience{' '}
        <span className={styles.num}>2.</span> a tinkerer who needs to know how things works{' '}
        <span className={styles.num}>3.</span> a former Georgia Tech student and current Georgia Tech football fan{' '}
        <span className={styles.num}>4.</span> a lover of word games, especially Scrabble
      </p>
    </section>
  )
}
