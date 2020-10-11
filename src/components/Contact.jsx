import React, { useState } from "react"
import emailjs from "emailjs-com"
import styles from "../styles/contact.module.css"
import githubLogo from "../images/github.svg"

export default function Contact() {
  // const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // console.log(process.env.GATSBY_EMAILJS_SERVICE_ID)
  const sendEmail = e => {
    e.preventDefault()
    // emailjs
    //   .send(
    //     process.env.GATSBY_EMAILJS_SERVICE_ID,
    //     process.env.GATSBY_EMAILJS_TEMPLATE_ID,
    //     {
    //       name,
    //       email,
    //       message,
    //     },
    //     process.env.GATSBY_EMAILJS_USER_ID
    //   )
    //   .then(response => {
    //     console.log("success", response)
    //   })
    //   .catch(err => console.error(err))
  }

  return (
    <section className={styles.contact} id="contact">
      <h1 className={styles.title}>Contact Me</h1>
      <form className={styles.contactForm} onSubmit={sendEmail}>
        <div className={styles.formLeft}>
          <label htmlFor="name">Name: </label>
          <input
            onChange={e => {
              setName(e.target.value)
            }}
            value={name}
            type="text"
            className={`${styles.contactName} ${styles.input}`}
            name="name"
            placeholder="Name"
          />
          <label htmlFor="email">E-mail:</label>
          <input
            onChange={e => {
              setEmail(e.target.value)
            }}
            value={email}
            type="text"
            className={`${styles.contactEmail} ${styles.input}`}
            name="email"
            placeholder="E-mail"
          />
        </div>
        <div className={styles.formRight}>
          <label htmlFor="message">Message:</label>
          <textarea
            onChange={e => {
              setMessage(e.target.value)
            }}
            placeholder="Message"
            value={message}
            type="text"
            rows="5"
            // cols="40"
            className={`${styles.contactMessage} ${styles.input}`}
            name="message"
          />
          <input className={styles.button} type="submit" value="Send" />
        </div>
      </form>
      {/* Todo: Socials */}
      {/* <div className="socialList">
        <img src={githubLogo} alt="github" className="github" />
        <img src={linkedinLogo} alt="linkedin" className="linkedin"/>
      </div> */}
    </section>
  )
}
