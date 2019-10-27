import React from "react";
import "./sketch.css";

export default props => (
  <div className="wrapper">
    <a href={props.link} target="_blank">
      <div className="container-sketch">
        <div className="sketch-img">
          <img className="cover-image" src={props.photo} alt="" />
        </div>
        <div className=" label sketch-name">{props.name}</div>
      </div>
    </a>
  </div>
);
