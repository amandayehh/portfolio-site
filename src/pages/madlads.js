import React from "react";
import Header from "../components/header";
import Hero from "../components/project-detail/hero";
import Content from "../components/project-detail/content";
import Back from "../components/back-button";
import Connect from "../components/connect/connect";

import ImgHero from "../imgs/audio/hero.png";

import ImgSketch from "../imgs/audio/sketch.png";

export default props => (
  <div>
    <title>Linguistic posters</title>

    <Header />
    <Hero
      photo={ImgHero}
      title="Madlibs...Except with image recognition"
      description="MadLads is a phone game where players generate MadLibs keywords by scanning objects in their environment."
      categoryA="Skills"
      textA="Creative coding, visual design"
      button="Try it out"
      link="https://amandayehh.github.io/audio-visualizer/"
    />
    <Content>
      <div className="content-text">
        <div className="p-main"></div>
        <div className="p-main">
          MadLads is a mobile web app reinvention of the famous phrasal template
          word game called Mad Libs, in which a player is prompted to fill in
          blanks to create a custom story. We took the same concept and
          incorporated machine learning and image recognition into the process
          of choosing words. In order to pick a word for the fill-in-the-blank,
          the user takes a photo of an object, which is then recognized and
          inputted into a list. After choosing up to five words, the user is
          presented with the crafted story, often humorous. The user then has a
          choice to try again for a different story with different words.
        </div>
        <div className="label-secondary">How it works</div>
        <div className="p-main">
          We used ml5.js, a pre-trained, web-friendly machine learning library
          based on Tensorflow that allowed us to create web applications that
          use machine learning processes on the web. We integrated the image
          recognition portion of the library with a live feed and used p5 and
          vanilla Javascript to create an interactive, entertaining experience
          in the form of an AI-assisted Mad Libs game.
        </div>
        <div className="label-secondary">Sketching and ideation</div>
        <div className="right-img-group">
          <div className="full">
            <img src={ImgSketch} alt="" />
          </div>
        </div>
        <Back />
      </div>
    </Content>
    <Connect />
  </div>
);
