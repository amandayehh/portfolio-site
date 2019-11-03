import React from "react";
import "./header.css";
import Fade from "react-reveal/Fade";

export default props => (
  <Fade>
    <div className="header reg-margin">
      <a href="../">
        <div className="logo label">Amanda Yeh</div>
      </a>
      <a href="../about">
        <div className="about label navigation">About</div>
      </a>
    </div>
  </Fade>
);
