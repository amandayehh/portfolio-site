import React from "react";
import Header from "../components/header";
import Hero from "../components/project-detail/hero";
import Content from "../components/project-detail/content";
import Back from "../components/back-button";
import Connect from "../components/connect/connect";

import ImgHero from "../imgs/lang/hero.png";
import ImgScale from "../imgs/lang/scale.png";
import ImgScale2 from "../imgs/lang/scale2.png";
import ImgMood from "../imgs/lang/mood.png";

import ImgChild1 from "../imgs/lang/child1.jpg";
import ImgChild2 from "../imgs/lang/child2.jpg";
import ImgChild3 from "../imgs/lang/child3.jpg";
import ImgChild4 from "../imgs/lang/child5.jpg";

import ImgWiki1 from "../imgs/lang/wiki1.jpg";
import ImgWiki2 from "../imgs/lang/wiki2.jpg";
import ImgWiki3 from "../imgs/lang/wiki3.jpg";
import ImgWiki4 from "../imgs/lang/wiki4.jpg";

import ImgSong1 from "../imgs/lang/song1.jpg";
import ImgSong2 from "../imgs/lang/song2.jpg";
import ImgSong3 from "../imgs/lang/song3.jpg";
import ImgSong4 from "../imgs/lang/song4.jpg";

import ImgNews1 from "../imgs/lang/news1.jpg";
import ImgNews2 from "../imgs/lang/news2.jpg";
import ImgNews3 from "../imgs/lang/news3.jpg";
import ImgNews4 from "../imgs/lang/news4.jpg";

export default props => (
  <div>
    <title>Linguistic posters</title>

    <Header />
    <div className="no-button">
      <Hero
        photo={ImgHero}
        title="Generatively creating posters based on linguistic sentiment"
        description="Texture is an experimental program that generates posters based on the sentiment of any given writing"
        categoryA="Skills"
        textA="Creative coding, sentiment analysis, graphic design"
      />
    </div>
    <Content>
      <div className="content-text">
        <div className="label-secondary-top">Moodboard</div>

        <div className="h2">What gives language its sentiment?</div>
        <div className="p-main">
          I came across James W. Pennebaker’s book The Secret Life of Pronouns,
          which explores sentiment analysis in-depth. While we often associate
          tone and sentiment with action words and key nouns in a piece of
          writing, Pennebaker’s research concluded that auxiliary words and
          pronouns actually have a significant impact on the tone and style of
          language. The usage and commonality of different types of auxiliary
          words used in a text dictates how logical or emotional the writing
          comes across. I also learned that the use of pronouns can indicate
          differences in social status and emotional state.
        </div>
        <div className="p-main">
          I also looked at how other programmers analyzes sentiment with the use
          of word affinity resources. Combined with other linguistics research,
          I developed a few key metrics of analyzing text.
        </div>
        <ul>
          <li className="p-main">Positivity & Negativity</li>
          <li className="p-main">Sociability & Intimacy</li>
          <li className="p-main">Orderliness & Chaos</li>
          <li className="p-main">Distinctiveness & Commonality</li>
        </ul>
        <div className="h2">
          How can computers evaluate emotions in writing?
        </div>
        <div className="p-main">
          The making of Texture can be broken down into two parts. First, I
          wrote stom literary analysis code that detects genre, tone, sentiment,
          and status of any given text. Those results are each mapped onto a
          sentiment scale between -10 and 10.
        </div>
        <div className="p-main">
          The sentiment scale contains four major sets, each representing two
          opposing sentiments. A given text will have a value in between the two
          sentiment extremes.​​​​​​​
        </div>
        <div className="right-img-group">
          <div className="full">
            <img className="photo-border" src={ImgScale} alt="" />
            <div className="p caption">Sentiment Scale in use</div>
          </div>
        </div>

        <div className="right-img-group">
          <div className="full">
            <img className="photo-border" src={ImgScale2} alt="" />
            <div className="p caption">Sentiment Scale in use</div>
          </div>
        </div>
        <div className="h2">From literary analysis to generative design</div>
        <div className="p-main">
          ​​​​​​​I created visual designs based on my sentiment values. The
          design of the posters are purely generative. Each value is directly
          and indirectly correlated with composition, scale, shape, color, and
          contrast.
        </div>
        <div className="label-secondary">Moodboard</div>
        <div className="right-img-group">
          <div className="full">
            <img className="photo-border" src={ImgMood} alt="" />
          </div>
        </div>
        <div className="label-secondary">Generated posters</div>
        <div className="h2">Experimenting with various types of writing</div>
        <div className="label-secondary-dark">Short children's stories</div>
      </div>
      <div className="reg-margin">
        <div className="right-img-group ">
          <div className="quarter">
            <img className="" src={ImgChild1} alt="" />
            <img className="photo-border" src={ImgChild2} alt="" />
            <img className="" src={ImgChild3} alt="" />
            <img className="" src={ImgChild4} alt="" />
          </div>
        </div>
      </div>
      <div className="content-text">
        <div className="label-secondary-dark">
          Various wikipedia articles on linguistics
        </div>
      </div>
      <div className="reg-margin">
        <div className="right-img-group ">
          <div className="quarter">
            <img className="photo-border" src={ImgWiki1} alt="" />
            <img className="" src={ImgWiki2} alt="" />
            <img className="photo-border" src={ImgWiki3} alt="" />
            <img className="photo-border" src={ImgWiki4} alt="" />
          </div>
        </div>
      </div>

      <div className="content-text">
        <div className="label-secondary-dark">Spotify Top 50 on March 2019</div>
      </div>
      <div className="reg-margin">
        <div className="right-img-group ">
          <div className="quarter">
            <img className="" src={ImgSong1} alt="" />
            <img className="photo-border" src={ImgSong2} alt="" />
            <img className="" src={ImgSong3} alt="" />
            <img className="" src={ImgSong4} alt="" />
          </div>
        </div>
      </div>

      <div className="content-text">
        <div className="label-secondary-dark">
          Featured News Articles from the Washington Post
        </div>
      </div>
      <div className="reg-margin">
        <div className="right-img-group ">
          <div className="quarter">
            <img className="" src={ImgNews1} alt="" />
            <img className="" src={ImgNews2} alt="" />
            <img className="" src={ImgNews3} alt="" />
            <img className="photo-border" src={ImgNews4} alt="" />
          </div>
        </div>
        <div className="content-text">
          <Back />
        </div>
      </div>
    </Content>
    <Connect />
  </div>
);
