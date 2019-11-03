import React from "react";
import Header from "../components/header";
import Title from "../components/title";
import HomeHero from "../components/home-hero";

import Projectgroup from "../components/projects/projectgroup";
import Connect from "../components/connect/connect";
import Sketchgroup from "../components/sketches/sketchgroup";

import Fade from "react-reveal/Fade";

export default () => (
  <div>
    <title>Amanda Yeh</title>
    <div style={{ backgroundColor: "var(--accent)" }}>
      <Header />
    </div>

    <HomeHero />

    <Title className="title" title="Projects" />
    <Projectgroup />

    <Title className="title" title="Sketches and experiments" />

    <Sketchgroup />

    <Connect />
  </div>
);
