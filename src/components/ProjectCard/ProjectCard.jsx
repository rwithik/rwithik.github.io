import React from "react"
import styles from "./style.module.css"

const ProjectCard = ({ title, description, github, link }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {link ? (
        <a className={styles.link} href={link}>
          url
        </a>
      ) : null}
      {github ? (
        <a className={styles.githubLink} href={github}>
          github
        </a>
      ) : null}
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ProjectCard
