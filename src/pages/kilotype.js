import React from "react";
import Header from "../components/header";
import Hero from "../components/project-detail/hero";
import Content from "../components/project-detail/content";
import Back from "../components/back-button";
import Connect from "../components/connect/connect";

import ImgHero from "../imgs/kilotype/hero.png";
import ImgTransform from "../imgs/kilotype/white.gif";
import ImgSpread1 from "../imgs/kilotype/spread1.png";
import ImgSpread2 from "../imgs/kilotype/spread2.png";
import ImgSpread3 from "../imgs/kilotype/spread3.png";

export default props => (
  <div>
    <title>Linguistic posters</title>

    <Header />
    <Hero
      photo={ImgHero}
      title="Designing playful web interactions for German type publisher Kilotype"
      description="Kilotpye’s new website showcases the foundry’s unique font releases with variable weight sliders, a clean purchase section, and a vibrant easter egg background."
      categoryA="Collaborators"
      textA="Friends of the Web"
      categoryB="Role"
      textB="Web design, visual design"
      button="View Live Site"
      link="https://kilotype.de/"
    />
    <Content>
      <div className="content-text">
        <div className="p-main">
          While working at studio Friends of the Web, I worked on the design for
          Kilotype’s new website. I wanted to use bright colors to make the
          website stand out from that of other type foundries, so I introduced
          gradient stripes that can be turned on and off. Users can see the
          typefaces against the standard white backdrop as well as vibrant
          backgrounds.
        </div>
        <div className="right-img-group">
          <div className="full">
            <img className="photo-shadow" src={ImgTransform} alt="" />
          </div>
        </div>
        <div className="label-secondary">Typeface Catalog</div>
        <div className="p-main">
          The typeface catalog presents a variety of type-testers set in
          different weights and styles, all of which the user can manipulate and
          try on their own. The purchase section allows the user to customize
          the type of font license, style, and quantity.
        </div>
        <div className="p-main">
          The font overview pages show the typefaces using the established
          visual style.
        </div>
      </div>
      <div className="reg-margin">
        <img className="full-img" src={ImgSpread1} alt="" />
      </div>
      <div className="reg-margin">
        <img className="full-img" src={ImgSpread2} alt="" />
      </div>
      <div className="reg-margin">
        <img className="full-img" src={ImgSpread3} alt="" />
      </div>
      <div className="content-text">
        <Back />
      </div>
    </Content>
    <Connect />
  </div>
);
