import React from "react"
import styles from "../styles/navbar.module.css"

export default function About() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>{"<rwithik/>"}</div>
      <ul className={styles.navList}>
        <li>
          <a className={styles.navLink} href="#about">
            About
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
