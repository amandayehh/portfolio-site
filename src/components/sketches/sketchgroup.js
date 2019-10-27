import React from "react";
import "./sketchgroup.css";
import Sketch from "./sketch";

import Fade from "react-reveal/Fade";

import ImgPumpkin from "../../imgs/sketches/pumpkin.png";
import ImgMirror from "../../imgs/sketches/mirror.gif";
import ImgProgram from "../../imgs/sketches/design-program.png";
import ImgUwu from "../../imgs/sketches/uwu.gif";
import ImgColor from "../../imgs/sketches/color.gif";

export default props => (
  <div className="sketch-group">
    <Fade>
      <div className="sketch-componenet">
        <Sketch link="" photo={ImgPumpkin} name="Hail Pumpkin Spice" />
      </div>

      <div className="sketch-componenet">
        <Sketch
          link="https://amandayehh.github.io/type-mirror/"
          photo={ImgMirror}
          name="Type mirror"
        />
      </div>

      <div className="sketch-componenet">
        <Sketch
          link="./sketches/pumtpkin"
          photo={ImgProgram}
          name="Design program guide"
        />
      </div>

      <div className="sketch-componenet">
        <Sketch
          link="https://amandayehh.github.io/uwu/"
          photo={ImgUwu}
          name="UWU"
        />
      </div>

      <div className="sketch-componenet">
        <Sketch photo={ImgColor} name="What's that color?" />
      </div>
    </Fade>
  </div>
);
