import { Fragment } from 'react'
import styles from './Entry.module.css'

// Joins syllables with an interpunct (·), except where a syllable begins with a
// space — there we break to a new word instead. e.g. ['sam','my',' taub','man']
// renders as "sam·my taub·man".
function Headword({ syllables }) {
  return (
    <h1 className={styles.headword}>
      {syllables.map((syllable, i) => {
        const isWordBreak = syllable.startsWith(' ')
        return (
          <Fragment key={i}>
            {i > 0 && (
              <span className={styles.sep} aria-hidden="true">
                {isWordBreak ? ' ' : '·'}
              </span>
            )}
            {syllable.trim()}
          </Fragment>
        )
      })}
    </h1>
  )
}

export default function Entry({ entry }) {
  const { syllables, pronunciation, partOfSpeech, definitions } = entry

  return (
    <article className={styles.entry}>
      <Headword syllables={syllables} />

      {(pronunciation || partOfSpeech) && (
        <p className={styles.meta}>
          {pronunciation && <span className={styles.pron}>{pronunciation}</span>}
          {partOfSpeech && <span className={styles.pos}>{partOfSpeech}</span>}
        </p>
      )}

      <p className={styles.definitions}>
        {definitions.map((def, i) => (
          <Fragment key={i}>
            <span className={styles.num}>{i + 1}.</span> {def}
            {i < definitions.length - 1 && ' '}
          </Fragment>
        ))}
      </p>
    </article>
  )
}
