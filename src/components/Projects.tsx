import React from "react"
import Card from "./ProjectCard/ProjectCard"
import styles from "../styles/projects.module.css"

const projectList = [
  {
    title: "Portfolio-v2",
    description:
      "This webpage you're looking at :). Fun fact, there is only one image in this whole page.",

    tags: ["gatsby", "React", "TypeScript"],
  },
  {
    title: "Easy Acres",
    description: "The site for Easy Acres",
    link: "https://rwithik.github.io/easyacres",
    github: "https://github.com/rwithik/easyacres",
    tags: ["HTML", "JS", "CSS"],
  },
  {
    title: "TeslaCET'20",
    description:
      "The site for TeslaCET, the technical fest of EEE department, CET",
    link: "https://rwithik.github.io/teslacet",
    github: "https://github.com/rwithik/teslacet",
    tags: ["HTML", "JS", "CSS"],
  },
  {
    title: "Karma",
    description:
      "A fully customizable, reusable, fullstack webpage for collges. " +
      "You will be able to do anything that has to do with the college through this app. Kindof like WordPress.",
    github: "https://github.com/ccfcet/karma",
    tags: ["Next.js", "Node.js", "Express.js"],
  },
  {
    title: "Global Elective",
    description:
      "An application for assigning non-departmental elective course for the final years. " +
      "Handled everything from letting the students choosing their courses to finally assigning them.",
    github: "https://github.com/ccfcet/karma",
    tags: ["Next.js", "Node.js", "Express.js"],
  },
  {
    title: "Cows and Bulls",
    description: "The web version of a number game we used to play in class",
    github: "https://github.com/rwithik/cows-and-bulls",
    tags: ["HTML", "JS", "CSS", "socket.io", "Node.js", "Express.js"],
  },
  {
    title: "Homepage",
    description: "A custom new tab page I use daily",
    link: "https://rwithik.github.io/homepage-frontend",
    github: "https://github.com/rwithik/homepage-frontend",
    tags: ["HTML", "JS", "CSS"],
  },
  {
    title: "stars.sh",
    description:
      "An eye-candy script to show randomly generated stars on your terminal",
    github: "https://github.com/rwithik/stars.sh",
    tags: ["shell", "linux"],
  },
]

const Projects = () => {
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
