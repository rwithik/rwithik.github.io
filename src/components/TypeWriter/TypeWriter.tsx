// Todo: Open-source this later
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useRef } from "react"

function TypeWriter({ strings, delay /* random? */ }) {
  const [text, setText] = useState("")
  const index = useRef(0)
  const isDeleting = useRef(false)
  const flag = useRef(false)
  const typingDelay = delay || 80

  useEffect(() => {
    let interval
    if (!isDeleting.current && text.length < strings[index.current].length) {
      interval = setInterval(
        () => {
          if (text.length === strings[index.current].length - 1) {
            isDeleting.current = true
            flag.current = true
          }
          setText(prev => prev + strings[index.current][text.length])
        },
        flag.current ? typingDelay * 10 : typingDelay
      )
    } else if (isDeleting.current) {
      interval = setInterval(
        () => {
          if (text.length === 1) {
            index.current = (index.current + 1) % strings.length
            isDeleting.current = false
            flag.current = true
          }
          setText(prev => prev.slice(0, -1))
        },
        flag.current ? typingDelay * 10 : typingDelay
      )
    }
    if (flag) flag.current = false

    return () => clearInterval(interval)
  })
  return <>{text}</>
}

TypeWriter.propTypes = {
  delay: PropTypes.number,
  strings: PropTypes.arrayOf(PropTypes.string),
}

export default TypeWriter
