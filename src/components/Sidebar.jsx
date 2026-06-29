import styles from './Sidebar.module.css'

export default function Sidebar({ items, active }) {
  return (
    <nav className={styles.sidebar} aria-label="Primary">
      <span className={styles.section}>{active}</span>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.label}>
            <a className={styles.link} href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
