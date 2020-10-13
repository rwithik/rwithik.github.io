import React from "react"
import Card from "./ProjectCard/ProjectCard"
import styles from "../styles/projects.module.css"
import projectList from "./projectList.json"

const Projects = () => {
  // Todo: Add links to Cows and Bulls, and other pending stuff in projectList.json
  return (
    <section className={styles.projects} id="projects">
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.cardContainer}>
        {projectList.map(({ title, github, link, tags, description }) => (
          <Card
            title={title}
            github={github}
            description={description}
            link={link}
            tags={tags}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
