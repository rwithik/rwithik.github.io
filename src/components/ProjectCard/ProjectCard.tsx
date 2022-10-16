import React from "react"
import styles from "./style.module.css"

interface Props {
  title: string
  description: string
  github?: string
  link?: string
  tags?: string[]
}
const ProjectCard = ({ title, description, github, link, tags }: Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.linkContainer}>
        {link ? (
          <a className={styles.link} href={link}>
            <i className="gg-link"></i>
          </a>
        ) : null}
        {github ? (
          <a className={styles.githubLink} href={github}>
            <i className="gg-code-slash"></i>
          </a>
        ) : null}
      </span>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ProjectCard
