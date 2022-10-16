import React from "react"
import styles from "../styles/experience.module.css"

const experienceLists = [
  {
    title: "FinBox",
    start: "2021",
    end: "present",
    role: "Fullstack Developer",
    tags: ["React", "TypeScript", "vite", "golang"],
    tasks: [
      "Worked mainly on two of the biggest products",
      "Converted both the front-end codebases(over 300+ files) to TypeScript",
      "Implemented major features on both products",
      "Worked on performance optimization on the front-end",
      "In 8 months, I was managing the front-end for one of those products",
      "Worked in integrating two major clients into our lending journey in the front-end and the back-end",
      "Made an internal tool to test another product",
      "Setup auto deployment on the dev servers with git hooks",
    ],
  },
  {
    title: "TCS Rapid Labs",
    start: "2020",
    end: "2021",
    role: "MERN Stack Intern",
    tags: [
      "React",
      "TypeScript",
      "MongoDB",
      "Nodejs",
      "Express",
      "Socket.io",
      "ant-design",
      "d3-charts",
    ],
    tasks: [
      "The project was a medical robot that will take readings from machine on a set routine",
      "Implemented an admin panel that had the ability to grant users selective permissions",
      "Also implemented the ability to set the path the robot will take in the admin panel",
      "Implemented data visualisation using d3 charts",
      "Implemented login and autherisation of users",
      "Wrote back-end code to communicate with the hardware backend server",
    ],
  },
  {
    title: "pden.zyx",
    start: "2019",
    end: "2020",
    role: "React Developer(Freelance)",
    tags: ["React", "TypeScript"],
    tasks: [
      "Worked on multiple project with pden.xyz",
      "Worked with the designers to convert designs to code",
      "All the logic was on the client-side, so I had to implement efficient data structures to store all the data on the client-side",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <h1 className="title highlight">Experience</h1>
      {experienceLists.map(exp => (
        <>
          <h2 className={styles.title}>
            {exp.title}{" "}
            <span className={styles.duration}>
              {" "}
              {exp.start}
              {exp.end && <>-{exp.end}</>}
            </span>
          </h2>
          <h3>{exp.role}</h3>
          <div className={styles.tagList}>
            {exp.tags.map(tag => (
              <span className={styles.tag}>{tag}</span>
            ))}
          </div>
          <ul className={styles.list}>
            {exp.tasks.map(task => (
              <li className={styles.listItem}>{task}</li>
            ))}
          </ul>
        </>
      ))}
    </section>
  )
}
