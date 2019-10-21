import React from "react"
import "./content.css"
import Fade from "react-reveal/Fade"

export default ({ children }) => (
  <div className="content-container reg-margin">
    <Fade> {children}</Fade>
  </div>
)
