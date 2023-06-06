import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> on Docker!
        </h1>

        <p className={styles.description}>
          Get started by click link below that use api from service
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Service Auth &rarr;</h3>
            <div>
              <Link href="/login">login - no need token</Link>
              <div>Use user data from seeder</div>
              <div>admin@email.com and password</div>
            </div>
            <div>
              <Link href="/mydata">my data - need token</Link>
              <div>Get our own data after login</div>
              <div>Consume json data of me</div>
            </div>
          </div>

          <div className={styles.card}>
            <h3>Service Product &rarr;</h3>
            <div>
              <Link href="/product">List Product - no need token</Link>
              <div>List all product</div>
              <div>Consume json all product</div>
            </div>
            <div>
              <Link href="/seedProduct">Seed New Product - need token</Link>
              <div>Seed new product data</div>
              <div>Input based on parameter</div>
            </div>
          </div>

          <div className={styles.card}>
            <h3>Service Analytic &rarr;</h3>
            <div>
              <Link href="/getStats">Get Product Stats - no need token</Link>
              <div>Get statistic value of products data</div>
              <div>Consume json all stats product</div>
            </div>
          </div>

          <div className={styles.card}></div>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
