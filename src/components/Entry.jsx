import styles from './Entry.module.css'

export default function Entry() {
  return (
    <article className={styles.entry}>
      <h1 className={styles.headword}>
        sam<span aria-hidden="true">·</span>my
        {' '}
        taub<span aria-hidden="true">·</span>man
      </h1>

      <p className={styles.definitions}>
        <span className={styles.num}>1.</span> some copy about being a coder{' '}
        <span className={styles.num}>2.</span> some copy about being interested in stuff{' '}
        <span className={styles.num}>3.</span> some copy about liking work games
      </p>
    </article>
  )
}
