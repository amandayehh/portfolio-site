import React from "react";
import Header from "../components/header";
import Hero from "../components/project-detail/hero";
import Content from "../components/project-detail/content";
import Back from "../components/back-button";
import Connect from "../components/connect/connect";

import ImgHero from "../imgs/madlads/hero.png";

import ImgMadlibs from "../imgs/madlads/madlibs.png";
import ImgSketch from "../imgs/madlads/sketch.png";
import ImgJounrey from "../imgs/madlads/journey.png";
import ImgStyle from "../imgs/madlads/style.png";
import ImgEnd from "../imgs/madlads/end.png";

export default props => (
  <div>
    <title>Madlads</title>

    <Header />
    <Hero
      photo={ImgHero}
      title="Madlibs...Except with image recognition"
      description="MadLads is a phone game where players generate MadLibs keywords by scanning objects in their environment."
      categoryA="Collaborators"
      textA="Yana Gevorgyan"
      categoryB="Skills"
      textB="Machine learning, creative coding, interaction design"
      button="Try it out"
      link="https://www.yg.is/madlads/live/"
    />
    <Content>
      <div className="content-text">
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
        <div className="right-img-group">
          <div className="full">
            <img className="photo-border" src={ImgMadlibs} alt="" />
          </div>
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
      </div>
      <div className="reg-margin">
        <img className="full-img" src={ImgSketch} alt="" />
      </div>
      <div className="content-text">
        <div className="label-secondary">A simple user journey</div>
        <div className="p-main">
          We designed an onboarding screen that contains a sneak-peak into the
          camera-based gameplay of MadLads, with a clear call-to-action start
          button. During the game, we prompted users to scan a variety of
          objects before confirming a selected one, as well as pacing them
          throughout the journey by showing how many words they have left.
        </div>
        <div className="right-img-group">
          <div className="full">
            <img className="" src={ImgJounrey} alt="" />
          </div>
        </div>
        <div className="label-secondary">
          Using visual design to guide players
        </div>
        <div className="p-main">
          Because the main focus of the game is the camera display, we kept the
          visual design simple yet inviting. On the start-screen, we established
          an inviting on-boarding state that shows users the camera-based and AI
          integrated gameplay to prepare them for the game to come. The app
          doesn’t immediately choose the first thing the user decides to scan,
          instead, they can experiment on a variety of objects and press a
          confirm button once they have decided on an object.
        </div>
        <div className="label-secondary">
          A fun design system to set the tone
        </div>
      </div>
      <div className="reg-margin">
        <img className="full-img" src={ImgStyle} alt="" />
      </div>
      <div className="content-text">
        <div className="label-secondary">Closing thoughts</div>
        <div className="p-main">
          With MadLads we created a fun and experimental game that anyone with a
          smartphone can play. Using my pre-existing knowledge of design and
          development, I was excited to bring image recognition and web speech
          into a game that many of us are familiar with. MadLads is just the
          start of many ML-related projects I wish to explore in the future!
        </div>
        <div className="p-main">
          We are proud of the smoothly functioning image recognition and phrasal
          template system, and our user experience design. We paid close
          attention to giving the user helpful feedback and options, such as
          allowing them to retry to capture the word and providing them with a
          little counter to keep in mind how many images they have left to take.
          Another example of user experience that we are proud of is our
          consistent style guides and interactive onboarding in the first slide,
          where the user can start trying out the image recognition system from
          the get-go.
        </div>
      </div>
      <div className="reg-margin">
        <img className="full-img" src={ImgEnd} alt="" />
      </div>
      <div className="content-text">
        <Back />
      </div>
    </Content>
    <Connect />
  </div>
);
