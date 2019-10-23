import React from "react";
import "./hero.css";
import "./hero-text.css";

import "./content.css";

import ImgArrow from "../../imgs/shared/arrow.png";
import Fade from "react-reveal/Fade";

export default props => (
  <Fade>
    <div className="hero-text">
      <div className="reg-margin hero-text-title">
        <div className="h1">{props.title}</div>
        <div className="p">{props.description}</div>
      </div>
      <img className="hero-image" src={props.photo} alt="" />
    </div>
  </Fade>
);
