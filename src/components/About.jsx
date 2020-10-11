import React from "react"
import styles from "../styles/about.module.css"

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.tag} id="about"></div>
      <div className={styles.imgContainer}>
        <img className={styles.image} src="https://unsplash.it/400" alt="" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptates
          blanditiis temporibus quas sed alias? Molestiae, quos commodi unde
          doloremque, labore quia officiis animi itaque necessitatibus totam
          repellat? Commodi nemo architecto impedit autem similique! Incidunt
          debitis labore explicabo fuga ipsam quod modi! Id, rerum doloribus!
          Suscipit deleniti iusto saepe facilis.
        </p>
      </div>
    </section>
  )
}
