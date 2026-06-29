import Sidebar from './components/Sidebar.jsx'
import Entry from './components/Entry.jsx'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <main className={styles.main}>
        <Entry />
      </main>
    </div>
  )
}
