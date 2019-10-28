import React from "react";
import "./projectgroup.css";
import Project from "./project";
import Textproject from "./textproject";

import ImgGoogle from "../../imgs/home-cover/google.png";
import ImgEasel from "../../imgs/home-cover/easel.png";
import ImgClubzy from "../../imgs/home-cover/clubzy.png";
import ImgShaap from "../../imgs/home-cover/shaap.png";
import ImgPoster from "../../imgs/home-cover/poster.png";
import ImgKilotype from "../../imgs/home-cover/kilotype.png";
import ImgMadlads from "../../imgs/home-cover/madlads.png";
import ImgAudio from "../../imgs/home-cover/audio.png";
import ImgQlab from "../../imgs/home-cover/qlab.png";
import ImgArtscape from "../../imgs/home-cover/artscape.png";
import ImgFlag from "../../imgs/home-cover/flag.png";

import Fade from "react-reveal/Fade";

export default props => (
  <div className="project-group reg-margin">
    <Fade>
      <div className="wide project">
        <Project
          link="./easel"
          photo={ImgEasel}
          category="UX Design | research | Data Visualization"
          name="Helping educators and researchers navigate social and emotional learning"
          description="Working with Harvard Easel Lab, I designed Explore SEL, a web research tool that helps researchers and educators understand complex social and emotional frameworks."
        />
      </div>

      <div className="narrow-text project">
        <Textproject
          page="./google"
          photo={ImgGoogle}
          name="Google UX design internship experience"
          description="I interned on the Google Docs team during the summer of 2019. Here's what I learned about design and product."
          link="Read more"
        />
      </div>

      <div className="half project">
        <Project
          link="./clubzy"
          photo={ImgClubzy}
          category="UX Design | Research"
          name="Empowering college students to get involved on campus and find personal communities
          "
          description="I designed Clubzy, a mobile app that helps students join and manage on campus activities."
        />
      </div>

      <div className="half project">
        <Project
          link="./shaap"
          photo={ImgShaap}
          category="UX Design | research"
          name="Creating an effortless and fun comparative shopping experience"
          description="I led the design for Shaap, a mobile app that brings a personalized and comparative shopping experience across all e-commerce sites.
          "
        />
      </div>

      <div className="minor narrow project">
        <Project
          link="./flag"
          photo={ImgFlag}
          category="Machine learning | interaction design"
          name="Teaching flag signaling with pose recognition"
        />
      </div>

      <div className="minor narrow project">
        <Project
          photo={ImgPoster}
          link="./poster"
          category="Creative coding"
          name="Generatively creating posters based on linguistic sentiment"
        />
      </div>

      <div className="minor narrow project">
        <Project
          link="./madlads"
          photo={ImgMadlads}
          category="Machine learning, interaction design"
          name="MadLibs... except with image recognition"
        />
      </div>

      <div className="minor narrow project">
        <Project
          link="./audio"
          photo={ImgAudio}
          category="Creative coding | visual design"
          name="Automatically creating audio visualizations with musical input"
        />
      </div>

      <div className="minor narrow project">
        <Project
          link="./kilotype"
          photo={ImgKilotype}
          category="Web design"
          name="Designing playful web interactions for German type publisher Kilotype"
        />
      </div>

      <div className="minor narrow project">
        <Project
          photo={ImgQlab}
          category="Web design"
          name="Redesigning the product site for a theatre software"
        />
      </div>
    </Fade>
  </div>
);
