import { useEffect } from 'react'
import Sidebar from './components/ui/Sidebar.jsx'
import Entry from './components/sections/Entry.jsx'
import Experience from './components/sections/Experience.jsx'
import { useActiveSection } from './hooks/useActiveSection.js'
import styles from './App.module.css'

const SECTIONS = ['home', 'experience']

export default function App() {
  const active = useActiveSection(SECTIONS)

  // Honor deep-links (e.g. /#projects) once the sections have rendered — the
  // browser's own hash scroll fires before React mounts the target.
  useEffect(() => {
    const { hash } = window.location
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView()
  }, [])

  return (
    <div className={styles.page}>
      <Sidebar active={active} />
      <main className={styles.main}>
        <Entry />
        <Experience />
      </main>
    </div>
  )
}
