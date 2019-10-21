import React from "react"
import "./sketchgroup.css"
import Sketch from "./sketch"

import Fade from "react-reveal/Fade"

import ImgPumpkin from "../../imgs/sketches/pumpkin.png"

export default props => (
  <div className="sketch-group">
    <Fade>
      <div className="sketch-componenet">
        <Sketch
          link="./sketches/pumpkin"
          photo={ImgPumpkin}
          name="All Hail Pumpkin Spice"
        />
      </div>

      <div className="sketch-componenet">
        <Sketch
          photo={
            "https://download.ams.birds.cornell.edu/api/v1/asset/169420251/1800"
          }
          name="React poster"
        />
      </div>

      <div className="sketch-componenet">
        <Sketch
          photo={
            "https://download.ams.birds.cornell.edu/api/v1/asset/169420251/1800"
          }
          name="React poster"
        />
      </div>

      <div className="sketch-componenet">
        <Sketch
          photo={
            "https://download.ams.birds.cornell.edu/api/v1/asset/169420251/1800"
          }
          name="React poster"
        />
      </div>

      <div className="sketch-componenet">
        <Sketch
          photo={
            "https://download.ams.birds.cornell.edu/api/v1/asset/169420251/1800"
          }
          name="React poster"
        />
      </div>

      <div className="sketch-componenet">
        <Sketch
          photo={
            "https://download.ams.birds.cornell.edu/api/v1/asset/169420251/1800"
          }
          name="React poster"
        />
      </div>

      <div className="sketch-componenet">
        <Sketch
          photo={
            "https://download.ams.birds.cornell.edu/api/v1/asset/169420251/1800"
          }
          name="React poster"
        />
      </div>

      <div className="sketch-componenet">
        <Sketch
          photo={
            "https://download.ams.birds.cornell.edu/api/v1/asset/169420251/1800"
          }
          name="React poster"
        />
      </div>

      <div className="sketch-componenet">
        <Sketch
          photo={
            "https://download.ams.birds.cornell.edu/api/v1/asset/169420251/1800"
          }
          name="React poster"
        />
      </div>
    </Fade>
  </div>
)
