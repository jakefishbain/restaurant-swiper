import styles from '../styles/Home.module.css'

import Swiper from '../components/swiper'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Swiper />
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  )
}
