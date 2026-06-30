import styles from './Footer.module.css'

const words = [
  { text: 'AA', def: 'rough, cindery lava.' },
  { text: 'ZA', def: 'a pizza.' },
  { text: 'QI', def: 'the vital force that in Chinese thought is inherent in all things.' },
  { text: 'XI', def: 'a Greek letter.' },
  { text: 'XU', def: 'a monetary unit of Vietnam.' },
  { text: 'JO', def: 'a sweetheart.' },
  { text: 'AJI', def: 'a chili pepper.' },
  { text: 'JIN', def: 'a supernatural being in Muslim mythology.' },
  { text: 'JEDI', def: 'a person with extraordinary skills.' },
  { text: 'QAT', def: 'an evergreen shrub.' },
  { text: 'SUQ', def: 'a marketplace in northern Africa and the Middle East.' },
  { text: 'CINQ', def: 'the number five.' },
  { text: 'QAJAQ', def: 'kayak.' },
  { text: 'QAID', def: 'a Muslim leader.' },
  { text: 'QUA', def: 'in the capacity of.' },
  { text: 'TRANQ', def: 'to administer a sedative to.' },
  { text: 'ZAX', def: 'a tool for cutting roof slates.' },
  { text: 'ADZ', def: 'to shape wood with a certain cutting tool.' },
  { text: 'ADZE', def: 'to shape wood with a certain cutting tool.' },
  { text: 'BIZ', def: 'an occupation, profession, or trade.' },
  { text: 'REZ', def: 'an area of land set aside for Native Americans.' },
  { text: 'SEZ', def: 'to give audible expression to.' },
  { text: 'RAJ', def: 'rule or dominion, especially British rule in India.' },
  { text: 'TAJ', def: 'a tall, conical cap worn in Muslim countries.' },
  { text: 'HAJ', def: 'a pilgrimage to Mecca.' },
  { text: 'ZITI', def: 'a tubular pasta.' },
  { text: 'EAU', def: 'water (a transparent, tasteless, odorless liquid).' },
  { text: 'AIOLI', def: 'garlic mayonnaise.' },
  { text: 'ZOEAE', def: 'a larval form of certain crustaceans.' },
  { text: 'AZO', def: 'containing nitrogen.' },
  { text: 'ZOA', def: 'the whole product of one fertilized egg.' },
  { text: 'ZOEA', def: 'a larval form of certain crustaceans.' },
  { text: 'AEON', def: 'an indefinitely long period of time.' },
  { text: 'ETUI', def: 'a case for holding small articles.' },
  { text: 'EAUX', def: 'water (a transparent, tasteless, odorless liquid).' },
  { text: 'ULU', def: 'an Inuit knife.' },
  { text: 'ZYZZYVA', def: 'a tropical weevil.' },
  { text: 'KAB', def: 'an ancient Hebrew unit of measure.' },
  { text: 'BINGO', def: 'a game of chance.' },
  { text: 'OXYPHENBUTAZONE', def: 'an anti-inflammatory drug' },
]

const LETTER_SCORES = {
  A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8,
  K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1,
  U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10,
}

function scrabbleScore(text) {
  return [...text.toUpperCase()].reduce((sum, letter) => sum + (LETTER_SCORES[letter] ?? 0), 0)
}

// Deterministic pick based on the calendar date, so it changes once a day
// but stays the same for everyone looking on a given day.
function hashDate(date) {
  const str = date.toISOString().slice(0, 10)
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

const word = words[hashDate(new Date()) % words.length]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line}>
        <p className={styles.label}>Scrabble word of the day:</p>
        <p className={styles.row}>
          <span className={styles.word}>{word.text}</span>{' '}
          <span className={styles.score}>({scrabbleScore(word.text)})</span>{' '}
          <span className={styles.def}>{word.def}</span>
        </p>
      </div>
      <p className={styles.copy}>&copy; {new Date().getFullYear()} Sammy Taubman</p>
    </footer>
  )
}
