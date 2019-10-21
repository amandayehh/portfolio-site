import React from "react"
import "./back-button.css"
import Fade from "react-reveal/Fade"
import ImgArrow from "../imgs/shared/arrow.png"

export default props => (
  <Fade>
    <a href="../">
      <div className="back-button-group">
        <div className="back-button-right">
          <img src={ImgArrow} alt="" />
        </div>
        <div className="back-button-content label">Back to home</div>
      </div>
    </a>
  </Fade>
)
