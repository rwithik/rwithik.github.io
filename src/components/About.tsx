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
        <h1 className="title">About Me</h1>
        <p className={styles.content}>
          Hi there! I'm a full-stack dev with a preference for front-end. When
          I'm not making websites, I'll either be tinkering with my{" "}
          <a href="https://github.com/rwithik/archrice" target="_blank">
            linux setup
          </a>
          , snooping around in{" "}
          <a href="https://github.com/rwithik" target="_blank">
            GitHub
          </a>
          . I'm also fairly active on{" "}
          <a
            href="https://stackoverflow.com/users/9549012/nullptr"
            target="_blank"
          >
            StackOverflow
          </a>
          , mostly answering questions related to JavaScript and React. I love
          working on optimizing code. Expecially JS code.
        </p>
        <p className={styles.content}>
          I'm a big fan of anime, especially Studio Ghibli movies. Something
          about their music is special. And I'm always open to collaborate on
          project, so <a href="#contact">hit me up</a> if you have any ideas.
        </p>
      </div>
    </section>
  )
}
