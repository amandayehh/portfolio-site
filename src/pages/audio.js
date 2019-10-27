import React from "react";
import Header from "../components/header";
import Hero from "../components/project-detail/hero";
import Content from "../components/project-detail/content";
import Back from "../components/back-button";
import Connect from "../components/connect/connect";

import ImgHero from "../imgs/audio/hero.png";

export default props => (
  <div>
    <title>Audio visualizer</title>

    <Header />
    <Hero
      photo={ImgHero}
      title="Automatically creating audio visualizations based on musical input"
      description="An audio visualizer that animates music based on frequency, peaks, and volume"
      categoryA="Skills"
      textA="Creative coding, visual design"
      button="Try it out"
      link="https://amandayehh.github.io/audio-visualizer/"
    />
    <Content>
      <div className="content-text">
        <Back />
      </div>
    </Content>
    <Connect />
  </div>
);
