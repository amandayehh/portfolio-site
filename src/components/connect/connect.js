import React from "react";
import "./connect.css";
import Fade from "react-reveal/Fade";

export default props => (
  <Fade>
    <div className="section-connect">
      <div className="connect-content">
        <div className="contact">
          <div className=" h1 light connect-title">Connect with me</div>
          <div className=" p light connect-description">
            Interested in working together? Or have design opportunities? I
            would love to learn about them!
          </div>
          <a href="mailto: ayeh01@mica.edu">
            <button className="label connect-email">ayeh01@mica.edu</button>
          </a>
        </div>
        <div className="social">
          <div className="connect-line"></div>
          <div className="social-content">
            <div className="label social-title">More about me</div>
            <div className="social-media-group">
              <a target="_blank" href="https://github.com/amandayehh">
                <div className="h2 light social-media">
                  <span className="underline">Github</span>
                </div>
              </a>

              <a target="_blank" href="https://www.linkedin.com/in/amanda-yeh/">
                <div className="h2 light social-media">
                  <span className="underline">LinkedIn</span>
                </div>
              </a>

              <a
                target="_blank"
                href="https://drive.google.com/file/d/1oWfZd0KMwdU_uwAh-FiBdtwy4QBpsSCv/view?usp=sharing"
              >
                <div className="h2 light social-media">
                  <span className="underline">Resume</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fade>
);
