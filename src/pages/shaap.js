import React from "react";
import Header from "../components/header";
import Hero from "../components/project-detail/hero";
import Content from "../components/project-detail/content";
import Back from "../components/back-button";
import Connect from "../components/connect/connect";

import ImgHero from "../imgs/shaap/hero.png";
import ImgMain from "../imgs/shaap/main.png";
import ImgConst from "../imgs/shaap/const.png";
import ImgProblem from "../imgs/shaap/problem.png";
import ImgSolution from "../imgs/shaap/solution.png";
import ImgFocus from "../imgs/shaap/focus.png";
import ImgCurrent from "../imgs/shaap/current.png";
import ImgEasy from "../imgs/shaap/easy.png";
import ImgOrg from "../imgs/shaap/org.png";
import ImgIter1 from "../imgs/shaap/iteration1.png";
import ImgIter2 from "../imgs/shaap/iteration2.png";
import ImgShop1 from "../imgs/shaap/shop1.png";
import ImgShop2 from "../imgs/shaap/shop2.png";
import ImgShare from "../imgs/shaap/share.png";
import ImgDiscover from "../imgs/shaap/discover.png";
import ImgChat1 from "../imgs/shaap/chat1.png";
import ImgChat2 from "../imgs/shaap/chat2.png";
import ImgSaved from "../imgs/shaap/saved.png";
import ImgProfile from "../imgs/shaap/profile.png";
import ImgWelcome from "../imgs/shaap/welcome.png";
import ImgWelcome2 from "../imgs/shaap/welcome2.png";
import ImgBrand from "../imgs/shaap/brand.png";
import ImgLogos from "../imgs/shaap/logos.png";

export default () => (
  <div className="shaap">
    <title>Shaap</title>

    <div className="clubzy-hero">
      <Header />
      <div className="no-button">
        <Hero
          photo={ImgHero}
          title="Creating an effortless and fun comparative shopping experience"
          description="I led the design for Shaap, a mobile app that brings a personalized and comparative shopping experience across all e-commerce sites."
          categoryA="Collaborators"
          textA="Eyan Goldman and Cal "
          categoryB="Role"
          textB="Design lead, Research, UX design"
        />
      </div>
    </div>
    <Content>
      <div className=""></div>{" "}
      <div className="content-text">
        <div className="p-main">
          During the summer of 2018, I worked with a team of engineers and led
          the design of for Shaap, a mobile app that brings a personalized and
          comparative shopping experience across all e-commerce sites.
        </div>
        <div className="p-main">
          Shaap (previously Weel) was the winner of Johns Hopkins University's
          2018 Summer Undergraduate Entrepreneurship Award.
        </div>
        <div className="p-main">
          Shaap is essentially a web browser app that utilizes a custom-built
          data acquisition software to identify e-commerce sites across the
          entire internet, capture their front-end data, and display it back to
          the user. Because Shaap can dynamically organize and display
          e-commerce site data, users can shop on various websites of their
          choosing simultaneously, discover brands that might be of interest,
          store products, and talk about items with friends.
        </div>
        <div className="label-secondary">Design Challenge</div>
        <div className="h2">
          How can we help people easily and comparatively online shop?
        </div>
        <div className="p-main">
          Other important design constraints and challenges identified are
          seamlessly introducing a foreign mobile concept to new users,
          promoting users to utilize features Shaap has to offer, and creating a
          product that aligns with both user and business needs.
        </div>
        <div className="p-main">
          I addressed these issues through a couple of design prospects:
          information architecture, user interface, and brand identity.
        </div>
      </div>
    </Content>
    <Content>
      <div></div>
      <div className="content-text">
        <div className="label-secondary">Product constraints</div>
      </div>
    </Content>
    <div className="reg-margin ">
      <img className="full-img " src={ImgConst} alt="" />
    </div>

    <Content>
      <div></div>
      <div className="content-text">
        <div className="label-secondary">Mobile shopping research</div>
        <div className="p-main">
          With limited screen space and unaccommodating browsing support, mobile
          shopping lack many of the core benefits exemplified through desktop
          e-commerce. Comparison shopping, shopping across multiple sites and
          brands, organizing selected items, and discussing options with friends
          and family become a tricky task to perform on a phone.
        </div>
        <div className="p-main">
          However, our research indicates that mobile shoppers continue to grow.
          Shopping apps are the fastest growing app category by time spent and
          mobile browsing now takes up 51% of all web traffic. Technology that
          undertakes the complexities involved with mobile shopping reaches out
          to an ever-growing user base.
        </div>
        <div className="right-img-group">
          <div className="full">
            <img src={ImgProblem} alt="" />
          </div>
        </div>
      </div>
    </Content>

    <Content>
      <div></div>
      <div className="content-text">
        <div className="label-secondary">Defining functionalities</div>
        <div className="p-main">
          After identifying pain points, we decided functionalities that would
          improve the mobile shopping experience.
        </div>
        <div className="right-img-group">
          <div className="full">
            <img src={ImgSolution} alt="" />
          </div>
        </div>
        <div className="label-secondary">Design focus</div>
        <div className="right-img-group">
          <div className="full">
            <img src={ImgFocus} alt="" />
          </div>
        </div>
        <div className="label-secondary">Organization structure</div>
      </div>
    </Content>
    <div className="reg-margin ">
      <img className="full-img " src={ImgOrg} alt="" />
    </div>

    <Content>
      <div className=""></div>
      <div className="content-text">
        <div className="label-secondary">Design solution</div>
        <div className="h2">Easily find items on various e-commerce sites</div>
        <div className="p-main">
          The shop page has two main functionalities: prompting users to add
          sites and explore products. These two functions will usually be
          performed separately: users will add a few sites first, and then
          browse items from the sites they added. This separation is similar to
          internet browsing habits where users will first type in a site or a
          keyword, and then browse the selected site.
        </div>
        <div className="right-img-group">
          <div className="full">
            <img src={ImgEasy} alt="" />
          </div>
        </div>
        <div className="p-main">
          I started working on the shop page with rough wireframes and initial
          UI layouts. Each design was iterated after discussion and
          consideration of constraints.
        </div>
      </div>
    </Content>

    <div className="reg-margin half-img">
      <img className="full-img-half" src={ImgIter1} alt="" />
      <img className="full-img-half " src={ImgIter2} alt="" />
    </div>

    <Content>
      <div className=""></div>
      <div className="content-text">
        <div className="h2 h2-top">Making it easy to add sites</div>
        <div className="p-main">
          Because these functions are performed one after the other, I decided
          to separate the processes into two different display modes, similar to
          that of a mobile internet browser. The first is an expandable search
          bar that allows users to type in site or keywords. When engaged in
          this site-adding mode, search results appear in a list. After the
          first site is added, the body of the screen shows suggested similar
          sites generated by a machine learning algorithm.
        </div>
        <div className="p-main">
          I also designed sites to visually resemble tags: each site is
          contained in a bubble that can be easily added, edited, or removed.
        </div>
      </div>
    </Content>

    <div className="reg-margin ">
      <img className="full-img" src={ImgShop1} alt="" />
      <img className="full-img" src={ImgShop2} alt="" />
    </div>

    <Content>
      <div className=""></div>
      <div className="content-text">
        <div className="h2 h2-top">Natural way of browsing products</div>
        <div className="p-main">
          Once users have added sites, they can tap out of the search bar or
          press done on the keyboard to browse items from added sites. The
          search section collapses into a top horizontal bar to indicate all
          added sites. Because some users like to browse by category of
          products, I chose to call out product categories in a horizontally
          scrollable list at the top section of the screen, where filters are
          displayed from most to least popular.
        </div>
        <div className="h2">Using cards to display product information</div>
        <div className="p-main">
          To organize the diverse types of products on different shopping sites,
          I modularized product image, price, and name with a card component.
          Tapping on the product card displays the actual site the product is
          sold on. Because I didn’t want to take the user out of the Shaap app
          experience, external sites are visually embedded into the app, where
          snippets of the Shaap app is still revealed in the background.
        </div>
        <div className="h2">Sharing and saving a product</div>
        <div className="p-main">
          Sharing a product to friends introduces a fun social aspect to online
          shopping, and can be easily achieved with the app. By either tapping
          on the chat icon on the product card or the share button underneath
          the product page, users are able to select a handful of friends to
          send the products to.
        </div>
      </div>
    </Content>

    <div className="reg-margin ">
      <img className="full-img" src={ImgShare} alt="" />
    </div>

    <Content>
      <div className=""></div>
      <div className="content-text">
        <div className="h2 h2-top">Discover new shops through collections</div>
        <div className="p-main">
          The home page is a great place for users to jump right into browsing
          products when they don't have any site or product in mind. The page
          shows a range of sites and products, including individually generated
          suggested shops, recently viewed sites, and saved products. Designed
          as a sampler plate of a little bit of everything, the home page
          presents a wide range of options users can choose from.
        </div>
      </div>
    </Content>

    <div className="reg-margin ">
      <img className="full-img" src={ImgDiscover} alt="" />
    </div>

    <Content>
      <div className=""></div>
      <div className="content-text">
        <div className="h2 h2-top">
          Reaction-based messaging makes product sharing fun and engaging
        </div>
        <div className="p-main">
          The chat comes with its very own custom emojis. Whenever a user
          receives a product from a friend, reactional emojis pop up for
          the user to respond with. By incorporating facial expression and
          imagery in addition to words, chatting feels more organic, fun, and
          exciting.
        </div>
        <div className="p-main">
          In an active chat with a friend, the user can also share a saved item
          with their friends directly.
        </div>
      </div>
    </Content>

    <div className="reg-margin ">
      <img className="full-img" src={ImgChat1} alt="" />
      <img className="full-img" src={ImgChat2} alt="" />
    </div>

    <Content>
      <div className=""></div>
      <div className="content-text">
        <div className="h2 h2-top">Revisiting interested items</div>
      </div>
    </Content>

    <div className="reg-margin ">
      <img className="full-img" src={ImgSaved} alt="" />
    </div>

    <Content>
      <div className=""></div>
      <div className="content-text">
        <div className="h2 h2-top">A simple yet effective profile page</div>
        <div className="p-main">
          The profile page doesn’t need to be anything fancy but contains all
          necessary features. Because the profile page is mainly about the user,
          I decided to give a large screen space to display the user’s name and
          profile picture. I also utilized colored icons to distinguish between
          the various functions.
        </div>
      </div>
    </Content>

    <div className="reg-margin ">
      <img className="full-img" src={ImgProfile} alt="" />
    </div>

    <Content>
      <div className=""></div>
      <div className="content-text">
        <div className="h2 h2-top">
          Welcome screens: creating a friendly on-boarding process with custom
          illustrations
        </div>
      </div>
    </Content>

    <div className="reg-margin ">
      <img className="full-img" src={ImgWelcome} alt="" />
      <img className="full-img" src={ImgWelcome2} alt="" />
    </div>

    <Content>
      <div className=""></div>
      <div className="content-text">
        <div className="h2 h2-top">Crafting a fresh brand voice</div>
        <div className="p-main">
          Shaap strips away perplexity involved in the mobile shopping
          experience, leaving what shopping should feel like: delightful and
          refreshing. Shaap’s visual language reflects an elegant balance
          between fun and simplicity. By painting with a limited color palette
          of pinks and blues against soft whites and greys, I created a vibrant
          visual system that flows seamlessly. A system of cards was established
          to dynamically and effectively organize product information.
          Throughout the app, I also sprinkled quirky user interactions with the
          use of emojis and lively illustrations.
        </div>
        <div className="p-main">
          Shaap is ultimately an app about the user and their leisure, and its
          visual identity echoes exactly that.
        </div>
        <div className="right-img-group">
          <div className="full">
            <img src={ImgBrand} alt="" />
          </div>
        </div>
        <div className="p-main">Logo ideas</div>
        <div className="right-img-group">
          <div className="full">
            <img src={ImgLogos} alt="" />
          </div>
        </div>
        <div className="label-secondary">Reflection</div>
        <div className="p-main">
          Shaap was quite different than most projects I’ve worked on. As the
          sole designer on the team, I learned to prompt engineers to chime in
          on the creative process with information, input, and feedback.
        </div>
        <div className="p-main">
          Innovative technology comes to life with good design. While working on
          Shaap, I focused on enabling the technology to be utilized in its full
          capacity. My favorite part of the project was generating creative
          solutions for all the novelty and uncertainty of a digital service
          I’ve never seen before to create a product that is ultimately
          friendly, simple, and engaging.
        </div>
        <Back />
      </div>
    </Content>

    <Connect />
  </div>
);
