import React from "react";
import "./textproject.css";

export default props => (
  <div className="container-text-project">
    <a href={props.page}>
      <div className="deco line"></div>

      <div className="text-project">
        <div className="image-wrapper">
          <img className="cover-image" src={props.photo} alt="" />
        </div>
        <div className=" h2 name">
          <span className="backline">{props.name}</span>
        </div>
        <div className=" p description">{props.description}</div>

        <div className="label link">{props.link}</div>
      </div>
      <div className="line"></div>
    </a>
  </div>
);
