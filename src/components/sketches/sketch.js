import React from "react"
import "./sketch.css"

export default props => (
  <div className="container-sketch">
    <a href={props.link}>
      <img className="cover-image" src={props.photo} alt="" />

      <div className=" label sketch-name">{props.name}</div>
    </a>
  </div>
)
