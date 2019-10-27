import React from "react";
import Header from "../components/header";
import Hero from "../components/project-detail/hero";
import Content from "../components/project-detail/content";
import Back from "../components/back-button";
import Connect from "../components/connect/connect";

import ImgHero from "../imgs/flag/hero.png";

export default props => (
  <div>
    <title>Flag semaphore</title>

    <Header />
    <Hero
      photo={ImgHero}
      title="Teaching flag signaling with pose recognition"
      description="A web-cam enabled game that teaches the alphabetic code of semaphore used by the Navy."
      categoryA="Collaborators"
      textA="Yana Gevorgyan"
      categoryB="Role"
      textB="Coding, visual design, front-end development"
      button="Try it out"
      link="https://ygev.github.io/semaphore/"
    />
    <Content>
      <div className="content-text">
        <div className="label-secondary-top">What is it?</div>
        <div className="p-main">
          When You Need Personal Space engages with the user by prompting a
          competitive introduction to flag semaphore. The user must follow the
          instructions on the page to complete as many flag signals as they can
          within 10 seconds. The user is prompted with a letter and a
          corresponding pose that they must recreate. As the user completes more
          rounds, they will develop muscle memory and think more quickly about
          each pose, eventually learning at least some form of flag semaphore.
          Who knows when they will need it?
        </div>
        <div className="right-img-group">
          <iframe
            width="700px"
            height="394px"
            src="https://www.youtube.com/embed/Iiyo9n3r0Ko"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className="label-secondary">Inspiration</div>
        <div className="p-main">
          While browsing new JavaScript libraries to explore, Amanda and I ran
          into PoseNet, a machine learning model that allows for real-time human
          pose estimation. We started throwing out ideas, such as dancing games
          and even yoga poses until we came up with flag signaling, or flag
          semaphore, which is often used by the US Navy to communicate over long
          distances. We also thought about the idea of non-verbal communication
          and came up with the domain whenyouneedpersonal.space for our project,
          which alludes to the non-verbal and long-distance nature of flag
          signaling.
        </div>
        <div className="label-secondary">How we built it</div>
        <div className="p-main">
          The pose is built with PoseNet using ml5.js library that allows for
          performance-efficient machine learning done through JavaScript on the
          web. Animations were created with Adobe After Effects.
        </div>
        <div className="label-secondary">Learnings </div>
        <div className="p-main">
          Aside from strengthening our machine learning application skills,
          we've learned a thing or two about flag semaphore!
        </div>
      </div>
      <div className="content-text">
        <Back />
      </div>
    </Content>
    <Connect />
  </div>
);
