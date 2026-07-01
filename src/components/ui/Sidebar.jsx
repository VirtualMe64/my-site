import styles from './Sidebar.module.css'

// Local to the component (not a separate content file) so the active-link
// logic stays in one readable place.
const links = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Sidebar({ active }) {
  return (
    <nav className={styles.sidebar} aria-label="Primary">
      <div className={styles.rail}>
        <div className={styles.identity}>
          <a href="#home" className={styles.name}>Sammy Taubman</a>
          <p className={styles.tag}>software engineer</p>
        </div>
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? styles.active : styles.link}
                aria-current={active === link.id ? 'true' : undefined}
              >
                <span aria-hidden="true" className={styles.marker}>
                  {active === link.id ? '>' : ' '}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
