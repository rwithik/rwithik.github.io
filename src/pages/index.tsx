import React from "react"
import {
  About,
  Contact,
  Experience,
  Landing,
  Navbar,
  Projects,
} from "../components"

export default function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
