import React from "react";
import Header from "../components/header";
import HeroText from "../components/project-detail/hero-text";
import Content from "../components/project-detail/content";
import Back from "../components/back-button";
import Connect from "../components/connect/connect";

import ImgHero from "../imgs/google/hero.png";

export default () => (
  <div>
    <title>Google UX internship</title>

    <Header />
    <HeroText
      title="Google UX design internship experience"
      description="
      I interned on the Google Docs team during the summer of 2019. Here's what I learned about design and product."
      photo={ImgHero}
    />
    <Content>
      <div className="content-text">
        <div className="p-main">
          I’m still in the process of writing about my work, but feel free to
          check out this slide deck that shares my experiences.
        </div>
        <iframe
          className="presentation"
          height="610"
          width="750"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUj7wZ7VZVhYkp0aanXtFP6%2FInternshipPresentation_Yeh_Amanda%3Fnode-id%3D1%253A2%26viewport%3D147%252C377%252C0.125%26scaling%3Dmin-zoom"
          allowfullscreen
        />
        <Back />
      </div>
    </Content>
    <Connect />
  </div>
);
