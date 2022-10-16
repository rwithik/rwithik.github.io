import React from "react"
import TypeWriter from "./TypeWriter/TypeWriter"
import styles from "../styles/landing.module.css"

export default function About() {
  return (
    <section className={styles.landing} id="landing">
      <h2 className={styles.subtitle}>Hi, I'm </h2>
      <h1 className={styles.title}>
        <span className="highlight">Rwithik Manoj</span>
      </h1>
      <h2 className={styles.subtitle}>
        And I'm a{" "}
        <span className="highlight">
          <TypeWriter strings={["Fullstack Developer", "Linux Enthusiast"]} />
        </span>
      </h2>
    </section>
  )
}
