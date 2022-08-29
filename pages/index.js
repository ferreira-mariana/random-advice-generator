import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [advice, setAdvice] = useState({id: 0, text: ''})

  const getRandomAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setAdvice({id: data.slip.id, text: data.slip.advice})
  };

  useEffect(() => {
    getRandomAdvice()
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Advices</title>
        <meta name="description" content="Random advices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>advice #{advice.id}</h2>
            <p>&lsquo;&lsquo;{advice.text}&rsquo;&rsquo;</p>
            <div className={styles.divider}>
              <div className={styles.line}></div>
              <div className={styles.icon}></div>
              <div className={styles.icon}></div>
              <div className={styles.line}></div>
            </div>
            <button className={styles.dice} onClick={getRandomAdvice}>
              <Image src="/icon-dice.svg" alt="dice" width={24} height={24} />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
