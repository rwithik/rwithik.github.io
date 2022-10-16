import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import styles from "../styles/contact.module.css"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<
    Partial<{ name: string; email: string; message: string }>
  >({})

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const tempErrors: typeof errors = {}
    if (!name) tempErrors.name = "Please tell me your name"
    if (!email) tempErrors.email = "Please tell me your email"
    if (!message) tempErrors.message = "Message is required"
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors)
      return
    }
    emailjs
      .send(
        process.env.GATSBY_EMAILJS_SERVICE_ID!,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID!,
        {
          name,
          email,
          message,
        },
        process.env.GATSBY_EMAILJS_USER_ID
      )
      .then(response => {
        console.log("success", response)
      })
      .catch(err => console.error(err))
  }

  return (
    <section className={styles.contact} id="contact">
      <h1 className={styles.title}>Contact Me</h1>
      <form className={styles.contactForm} onSubmit={sendEmail}>
        <div className={styles.formLeft}>
          <label className={styles.label} htmlFor="name">
            Name:
            <input
              onChange={e => {
                setErrors(prev => ({ ...prev, name: "" }))
                setName(e.target.value)
              }}
              value={name}
              type="text"
              className={`${styles.contactName} ${styles.input}`}
              name="name"
              placeholder="Name"
            />
          </label>
          <span className={styles.error}>{errors.name}</span>
          <label className={styles.label} htmlFor="email">
            E-mail:
            <input
              onChange={e => {
                setErrors(prev => ({ ...prev, email: "" }))
                setEmail(e.target.value)
              }}
              value={email}
              type="text"
              className={`${styles.contactEmail} ${styles.input}`}
              name="email"
              placeholder="E-mail"
            />
          </label>
          <span className={styles.error}>{errors.email}</span>
        </div>
        <div className={styles.formRight}>
          <label
            className={styles.label + " " + styles.textareaLabel}
            htmlFor="message"
          >
            Message:
            <textarea
              onChange={e => {
                setErrors(prev => ({ ...prev, message: "" }))
                setMessage(e.target.value)
              }}
              placeholder="Message"
              value={message}
              className={`${styles.contactMessage} ${styles.input}`}
              name="message"
            />
            <span className={styles.error}>{errors.message}</span>
          </label>
          <input className={styles.button} type="submit" value="Send" />
        </div>
      </form>
      {/* Todo: Socials */}
      {/* {(socialList = ["github", "gitlab?", "stackoverflow"])} */}
      {/* <div className="socialList">
        <img src={githubLogo} alt="github" className="github" />
        <img src={linkedinLogo} alt="linkedin" className="linkedin"/>
      </div> */}
    </section>
  )
}
