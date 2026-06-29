import Sidebar from './components/Sidebar.jsx'
import Entry from './components/Entry.jsx'
import { nav, entry } from './content.js'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.page}>
      <Sidebar items={nav} active="Index" />
      <main className={styles.main}>
        <Entry entry={entry} />
      </main>
    </div>
  )
}
