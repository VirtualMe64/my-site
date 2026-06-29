import styles from './Sidebar.module.css'

// Local to the component (not a separate content file) so the active-link
// logic stays in one readable place.
const links = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

export default function Sidebar({ active }) {
  return (
    <nav className={styles.sidebar} aria-label="Primary">
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`${styles.link} ${active === link.id ? styles.active : ''}`.trim()}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
