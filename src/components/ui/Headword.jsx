import styles from './Headword.module.css'

// A headword styled like a dictionary entry: the word (written inline with
// interpunct dots) followed by an italic part-of-speech tag. Size is driven by
// the --headword-size custom property, so a caller can scale it up (e.g. the
// hero) just by setting that property in its own CSS.
export default function Headword({ children, pos, as: Tag = 'h2' }) {
  return (
    <Tag className={styles.headword}>
      {children}
      {pos && <span className={styles.pos}> {pos}</span>}
    </Tag>
  )
}
