import React from "react"
import styles from "../styles/navbar.module.css"

export default function About() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>{"<rwithik/>"}</div>
      <ul className={styles.navList}>
        <li className="nav__item">
          <a href="#about">About</a>
        </li>
        <li className="nav__item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav__item">
          <a href="#experience">Experience</a>
        </li>
        <li className="nav__item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
