import Headword from '../ui/Headword.jsx'
import styles from './Contact.module.css'

const links = [
  { label: 'Email', href: 'mailto:staubman1@gmail.com', display: 'staubman1@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sammytaubman/', display: 'linkedin.com/in/sammytaubman' },
  { label: 'GitHub', href: 'https://github.com/VirtualMe64', display: 'github.com/VirtualMe64' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className={styles.contact}>
        <Headword pos="n.">
          con<span aria-hidden="true">·</span>tact
        </Headword>

        <p className={styles.gloss}>ways to reach me.</p>

        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.label} className={styles.row}>
              <span className={styles.label}>{link.label}</span>
              <a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}>
                {link.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
