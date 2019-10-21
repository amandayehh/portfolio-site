import React from "react"
import "./header.css"
import Fade from "react-reveal/Fade"

export default props => (
  <Fade>
    <div className="header reg-margin">
      <a href="../">
        <div className="logo label">
          Amanda Yeh is a product and interaction designer
        </div>
      </a>
      <a href="../">
        <div className="about label navigation">About</div>
      </a>
    </div>
  </Fade>
)
