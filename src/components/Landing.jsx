import React from "react"
import styles from "../styles/landing.module.css"

export default function About() {
  return (
    <section className={styles.landing} id="landing">
      <h1 className={styles.title}>
        Hi, my name is <span className="highlight">Rwithik Manoj</span>!
      </h1>
      <h2 className={styles.subtitle}>
        And I'm a <span className="highlight">JavaScript</span> developer
      </h2>
    </section>
  )
}
