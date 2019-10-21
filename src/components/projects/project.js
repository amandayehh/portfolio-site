import React from "react"
import "./project.css"

export default props => (
  <div className="project-content">
    <a href={props.link}>
      <div className="image-wrapper">
        <img className="cover-image" src={props.photo} alt="" />
        <div className="project-line line"></div>
      </div>
      <div className="category label">{props.category}</div>
      <div className="name h2">
        <span className="backline">{props.name}</span>
      </div>
      <div className="description p">{props.description}</div>
    </a>
  </div>
)
