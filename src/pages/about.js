import React from "react";
import Header from "../components/header";
import Title from "../components/title";
import Projectgroup from "../components/projects/projectgroup";
import Connect from "../components/connect/connect";
import Sketchgroup from "../components/sketches/sketchgroup";
import "../styles/about-me.css";

import Fade from "react-reveal/Fade";

import ImgMe from "../imgs/about/me.jpg";

export default () => (
  <div className="">
    <Fade>
      <title>About me</title>
      <Header />

      <div className="reg-margin about-me">
        <div className="bio">
          <div className="me-img">
            <div className="line"></div>
            <img className="f" src={ImgMe} alt="" />
          </div>
          <div className="content">
            <div className="line"></div>
            <div className="h2">
              Hey there! I’m an interaction designer and creative technologist
              building cool things on and off the web.
            </div>
            <div className="p-main">
              This summer, I was a UX design intern at{" "}
              <a className="link" target="_blank" href="https://www.google.com">
                Google
              </a>{" "}
              creating experiences that improves Doc’s workflow. Previously, I
              was a product design intern at{" "}
              <a
                className="link"
                target="_blank"
                href="https://friendsoftheweb.com/"
              >
                Friends of the Web
              </a>{" "}
              where I designed research tools, e-commerce platforms, and product
              sites for over 10 clients. I’m currently also a designer at{" "}
              <a className="link" target="_blank" href="https://64robots.com">
                64 Robots
              </a>{" "}
              making an investigation game.
            </div>
            <div className="p-main">
              I’m seeking new opportunities in product and interaction design.
              Please reach out to me at{" "}
              <a className="link" href="mailto: ayeh01@mica.edu">
                ayeh01@mica.edu
              </a>{" "}
              if you want to work on an interesting project together!
            </div>

            <div className="contact">
              <div className="p-main ">More about me:</div>
              <a target="_blank" href="https://github.com/amandayehh">
                <div className="p-main ">
                  <span className="link"> Github</span>
                </div>
              </a>

              <a target="_blank" href="https://www.linkedin.com/in/amanda-yeh/">
                <div className="p-main ">
                  <span className="link"> LinkedIn</span>
                </div>
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1oWfZd0KMwdU_uwAh-FiBdtwy4QBpsSCv/view?usp=sharing"
              >
                <div className="p-main ">
                  <span className="link"> Resume</span>
                </div>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  </div>
);
