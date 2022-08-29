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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>advice #{advice.id}</h2>
            <p>"{advice.text}"</p>
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
