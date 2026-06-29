import Headword from '../ui/Headword.jsx'
import styles from './Entry.module.css'

export default function Entry() {
  return (
    <section id="home">
      <div className={styles.entry}>
        <Headword as="h1" pos="n. proper">
          sam<span aria-hidden="true">·</span>my
          {' '}
          taub<span aria-hidden="true">·</span>man
        </Headword>

        <p className={styles.definitions}>
          <span className={styles.num}>1.</span> a software engineer at stripe, helping agents pay for things{' '}
          <span className={styles.num}>2.</span> a programmer with 10 years of experience who is passionate about learning how things work{' '}
          <span className={styles.num}>3.</span> a former georgia tech student and current georgia tech football fan{' '}
          <span className={styles.num}>4.</span> a lover of word games, especially scrabble
        </p>
      </div>
    </section>
  )
}
