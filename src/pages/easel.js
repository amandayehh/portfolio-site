import React from "react";
import Header from "../components/header";
import Hero from "../components/project-detail/hero";
import Content from "../components/project-detail/content";
import Back from "../components/back-button";
import Connect from "../components/connect/connect";

import ImgHero from "../imgs/easel/hero.png";
import ImgMain from "../imgs/easel/main.png";
import EarlyHomeA from "../imgs/easel/early-home1.png";
import EarlyHomeB from "../imgs/easel/early-home2.png";
import ImgExplore from "../imgs/easel/explore.png";
import ImgSkill from "../imgs/easel/skills.png";
import ImgDomain from "../imgs/easel/domain.png";
import ImgSunburst from "../imgs/easel/sunburst.png";
import ImgProfile from "../imgs/easel/profile.png";
import ImgTerm from "../imgs/easel/term.png";

export default () => (
  <div>
    <title>Easel Lab</title>

    <Header />
    <Hero
      photo={ImgHero}
      title="Helping educators and researchers navigate social and emotional learning"
      description="Working with Harvard Easel Lab, I designed Explore SEL, a web research tool that helps researchers and educators understand complex social and emotional frameworks."
      categoryA="Collaborators"
      textA="Harvard EASEL Lab, Friends of the Web"
      categoryB="Role"
      textB="UX design, research, data visualization"
      button="view live site"
    />

    <Content>
      <div className=""></div>
      <div className="content-text">
        <div className="p-main">
          In the U.S, there are over 20 social and emotional learning frameworks
          (SEL frameworks) that researchers, educators, and policymakers use to
          develop course curriculums, education policies, and testing. However,
          because each framework cover different cognitive domain, focus on
          different student groups, and emphasize different skills, it is
          difficult to choose the most suitable framework for each situation.
        </div>
        <div className="p-main">
          As a designer at Friends of the Web, I collaborated with Harvard Easel
          Lab to design a framework research tool to help researchers,
          educators, and policymakers better understand and utilize SEL
          frameworks.
        </div>

        <div className="label-secondary">Problem with SEl frameworks</div>
        <div className="h2">
          1. Frameworks cover different skills and domain
        </div>
        <div className="p-main">
          Some frameworks might focus more on leadership, others on
          independence, and some on social abilities and etc. Some frameworks
          are more narrow while others cover a larger range of SEL domains.{" "}
        </div>
        <div className="h2">
          2. Frameworks target different age groups and audiences
        </div>
        <div className="p-main">
          From kindergarten to adulthood, different SEL frameworks look at
          different behaviours commonly found in each age group.
        </div>
        <div className="h2">
          3. The different forms that frameworks come in make it difficult to
          compare them
        </div>
        <div className="p-main">
          Frameworks follow unique rubrics, lists, theories, and models. Some
          predicting the accomplishments of students that perform well on
          certain tasks, others evaluate the overall success of the school.
        </div>
        <div className="label-secondary">Design Challenge</div>
        <div className="h2">
          How can we help researchers, educators, and policymakers better
          understand and select a suitable SEL framework for their unique
          situation?
        </div>
        <div className="label-secondary">Understanding the user</div>
        <div className="p-main">
          I generated 50 survey questions that ask educators how their current
          experience, their pain points, and the selection process on SEL
          frameworks. In the end, a written survey of 20 questions was given to
          educators, policymakers, and researchers in the field.
        </div>
        <div className="p-main">Here’s what I learned from the survey:</div>
        <div className="h2">
          1. Target users are familiar with one or a few frameworks but thought
          more knowledge on SEL in general could benefit their work.
        </div>
        <div className="h2">
          2. Users thought the most beneficial information would be framework
          comparison, followed by framework profile, followed by SEL
          terminology.
        </div>

        <div className="label-secondary">Explore page</div>
        <div className="h2">
          An exploration page that aligns with user needs
        </div>
        <div className="right-img-group">
          <div className="half">
            <img className="photo-shadow" src={EarlyHomeA} alt="" />
            <div className="label-small">Issue</div>
            <div className="p">
              Comparison tools can only be seen after scrolling
            </div>
            <div className="p">
              Implies that the tool on top is the most important
            </div>
            <div className="p">Too text heavy</div>
          </div>
          <div className="half">
            <img className="photo-shadow" src={EarlyHomeB} alt="" />
            <div className="label-small">Issue</div>
            <div className="p">
              Comparison tools can only be seen after scrolling
            </div>
            <div className="p">
              Implies that the tool on top is the most important
            </div>
            <div className="p">Too text heavy</div>
          </div>
        </div>
      </div>
    </Content>

    <Content>
      <img className="left-img photo-shadow" src={ImgExplore} alt="" />
      <div className="content-text">
        <div className="p-main">
          I revised the design for the explore page with the following design
          principles:
        </div>
        <div className="h2">
          Clear framework comparison tool entry points above the scroll
        </div>
        <div className="p-main">
          Since our target audience is already familiar with SEL, I used minimal
          text to describe them. The three main comparison tools are the most
          prominent CTAs.{" "}
        </div>
        <div className="h2">Mark each framework with a unique icon</div>
        <div className="p-main">
          Right below the CTAs, the 16 studied frameworks are listed alongside a
          unique icon. Each icon is generated based on the depth and breadth of
          the framework to help with visual distinguishment.
        </div>
      </div>
    </Content>

    <Content>
      <img className="left-img photo-shadow" src={ImgSkill} alt="" />
      <div className="content-text">
        <div className="label-secondary-top">Data visualizations</div>
        <div className="h2">Compare skills between frameworks</div>
        <div className="p-main">
          Different frameworks might call the same skills different names. The
          researchers at Harvard used machine learning to identify the
          similarity of each term in different frameworks.{" "}
        </div>
        <div className="p-main">
          Using this graph, users can tell that two terms are more related when
          there is a thicker line connecting them.
        </div>
      </div>
    </Content>

    <Content>
      <img className="left-img photo-shadow" src={ImgDomain} alt="" />
      <div className="content-text">
        <div className="h2">Compare cognitive domains across frameworks</div>
        <div className="p-main">
          Some frameworks focus more on personal identity while others on
          emotional skills. This bar chart breaks down how much of the 6 main
          cognitive domains are represented in each framework cover.
        </div>
      </div>
    </Content>

    <Content>
      <img className="left-img photo-shadow" src={ImgSunburst} alt="" />
      <div className="content-text">
        <div className="h2">Identify related skills across frameworks</div>
        <div className="p-main">
          Frameworks have different terms for the same skills. Using this tool,
          users can see how a skill, such as attention control, is represented
          in each framework
        </div>
        <div className="p-main">
          Each color represents a framework and each piece of the sunburst
          represents a skill within that framework. The farther you move out
          from the center of the sunburst, the more discrete and specific the
          skills become
        </div>
      </div>
    </Content>

    <Content>
      <img className="left-img photo-shadow" src={ImgProfile} alt="" />
      <div className="content-text">
        <div className="label-secondary-top">Framework Profile</div>
        <div className="p-main">
          On the internet, different SEL organizations use diverse terms and
          structures to describe their framework, so we worked with Harvard
          Easel Lab to produce a uniform format that describes the 16
          frameworks.
        </div>
        <div className="h2">
          The hierarchy of the framework profile is layed out specifically to
          highlight distinguishing information
        </div>
        <div className="p-main">
          A graph of the frameworks on top, followed by a domain breakdown, and
          further reading material at the bottom. The same categories of
          meta-information are repeated on each profile page for users to
          quickly grasp the usage of the framework.
        </div>
      </div>
    </Content>

    <Content>
      <img className="left-img photo-shadow" src={ImgTerm} alt="" />
      <div className="content-text">
        <div className="label-secondary-top">Term definition</div>
        <div className="p-main">
          Multiple SEL frameworks can have different or even conflicting
          definitions for the same term, so the challenge was the simultaneously
          display all definitions without confusing the user. I separated the
          definitions by its framework source without directly associating any
          framework to that specific term. Related terms and observable behavior
          are also listed separately for each framework.
        </div>
      </div>
    </Content>

    <Content>
      <div className="content-text">
        <img className="left-img photo-shadow" src="" alt="" />

        <div className="label-secondary-top">Reflection</div>
        <div className="p-main">
          It's important to simplify complicated information. By communicating
          with researchers, developing user surveys, and assessing the objective
          of different framework comparison tools, I was able to highlight the
          unique significance of each comparison tool through visual design.
        </div>
        <Back />
      </div>
    </Content>
    <Connect />
  </div>
);
