import React from "react";
import "./hero.css";
import ImgArrow from "../../imgs/shared/arrow.png";
import Fade from "react-reveal/Fade";

export default props => (
  <Fade>
    <div className="hero-container styles.hi">
      <div className="hero-content reg-margin">
        <div className="hero-project-name">
          <div className="h1">{props.title}</div>
          <div className="p">{props.description}</div>
        </div>
        <div className="hero-meta">
          <div className="hero-category">
            <div className="meta-section">
              <div className="label meta-label">{props.categoryA}</div>
              <div className="p">{props.textA}</div>
            </div>
            <div className="meta-section">
              <div className="label meta-label">{props.categoryB}</div>
              <div className="p">{props.textB}</div>
            </div>
          </div>

          <a href={props.link} target="_blank">
            <div className="hero-button-group">
              <div className="hero-button-content label">{props.button}</div>
              <div className="hero-button-right">
                <img src={ImgArrow} alt="" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <img className="hero-image" src={props.photo} alt="" />
    </div>
  </Fade>
);
