import React from "react";
import Header from "../components/header";
import Hero from "../components/project-detail/hero";
import Content from "../components/project-detail/content";
import Back from "../components/back-button";
import Connect from "../components/connect/connect";

import ImgHero from "../imgs/clubzy/hero.png";
import ImgMain from "../imgs/clubzy/main.png";
import ImgCurrent from "../imgs/clubzy/current.png";
import ImgSvaA from "../imgs/clubzy/sva2.jpg";
import ImgSvaB from "../imgs/clubzy/sva1.jpg";
import ImgAffinity from "../imgs/clubzy/affinity.jpg";
import ImgJourney from "../imgs/clubzy/journey.png";
import ImgPersona from "../imgs/clubzy/persona.png";
import ImgSketches from "../imgs/clubzy/sketches.png";
import ImgSort from "../imgs/clubzy/sort.png";
import ImgSortA from "../imgs/clubzy/sort1.png";
import ImgSortB from "../imgs/clubzy/sort2.png";
import ImgComp from "../imgs/clubzy/component.png";
import ImgExploreA from "../imgs/clubzy/explore1.png";
import ImgExploreB from "../imgs/clubzy/explore2.png";
import ImgExploreC from "../imgs/clubzy/explore3.png";
import ImgExploreFinalA from "../imgs/clubzy/finalexplore.png";
import ImgExploreFinalB from "../imgs/clubzy/finalexplore2.png";
import ImgCalendarA from "../imgs/clubzy/calendar1.png";
import ImgCalendarB from "../imgs/clubzy/calendar2.png";
import ImgFinalCalendarA from "../imgs/clubzy/calendarfinal1.png";
import ImgFinalCalendarB from "../imgs/clubzy/calendarfinal2.png";
import ImgCurrentProposal from "../imgs/clubzy/new.png";
import ImgProfile from "../imgs/clubzy/profile.png";
import ImgNewPor from "../imgs/clubzy/newpor.png";

export default () => (
  <div>
    <div className="no-button">
      <title>Clubzy</title>

      <Header />
      <Hero
        photo={ImgHero}
        title="Empowering college students to get involved on campus and find personal communities"
        description="I designed Clubzy, a mobile app that helps students join and manage on campus activities."
        categoryA="Collaborators"
        textA="MICA student engagement center "
        categoryB="Role"
        textB="User study, task analysis, UI/UX design"
      />
    </div>

    <Content>
      <img className="left-img" src="" alt="" />
      <div className="content-text">
        <div className="p-main">
          At MICA(Maryland Institute College of Art), there are plenty of clubs
          and activities that enable students to participate on-campus, find
          interests, and make friends. However, currently, it is difficult for
          students to find information about campus events and the motivation to
          participate.
        </div>
        <div className="p-main">
          I designed a campus app that centralizes on-campus activities and
          resources and motivates students to engage with their community.
        </div>
        <div className="label-secondary">Process</div>
        <ol>
          <li className="p-main">
            Evaluated MICA's current system and identified pain-points in the
            current process
          </li>
          <li className="p-main">
            Interviewed 8 students and MICA officers to identify behaviors,
            motives, and pain points regarding student engagement
          </li>
          <li className="p-main">
            Mapped out the current journey, created an affinity diagram, and
            established a user persona
          </li>
          <li className="p-main">
            Defined features and established an information architecture
          </li>
          <li className="p-main">
            Sketched out ideas and created low-fidelity mockups
          </li>
          <li className="p-main">Tested and iterated mockups</li>
          <li className="p-main">Designed high-fidelity prototypes</li>
        </ol>
      </div>
      <div className="content-text">
        <div className="label-secondary">The Problem</div>
        <div className="h2">
          How can I empower students to become more involved on campus and build
          communities around their interests?
        </div>
        <div className="p-main">
          Resources on the MICA website requires a lot of digging. The majority
          of the resources lives on MICA’s website, but student very rarely
          visits the school’s website.
        </div>
        <div className="p-main">
          Information is very scattered. From emails to club fairs, it is
          difficult to track which clubs a student has joined, or where the
          meetings are.
        </div>
        <div className="p-main">
          Resources and motivation decline as the semester progresses. During
          orientation and the first few weeks of the semester, students can
          learn about campus activities through club fairs, orientation leaders,
          and club in-class visits. During this time, students also have more
          free time to participate in clubs. However, towards the end of the
          semester, there are no engagement fairs and students are very busy
          with their school work.
        </div>
        <div className="label-secondary">Constraints</div>
        <div className="p-main">
          There are two types of meetings: regular weekly meetups and special
          events. Special events, such as showings, competitions, and outings
          are higher stake events where students outside of the club will also
          be interested in attending.
        </div>
        <div className="p-main">
          Students have a multitude of digital platforms to communicate with
          each other. I didn’t design a messaging system because students
          already use social media, messaging apps, email, canvas to talk
          to each other remotely. Social media is especially a common tool
          students use, so integrating this experience with other digital
          platforms is key. 
        </div>
        <div className="label-secondary">What's the current system</div>
        <div className="right-img-group">
          <div className="full">
            <img className="photo-shadow" src={ImgCurrent} alt="" />
          </div>
        </div>
        <div className="label-secondary">User interviews</div>
        <div className="p-main">
          I conducted 10 semi-constructed interviews with freshmen, transfers,
          and upperclassmen to learn about the current ways students discover
          and join organizations.
        </div>
        <ul>
          <li className="p-main">
            What are some clubs you are a part of and why did you join it?
          </li>
          <li className="p-main">
            What resources/sources of information do you have about joining a
            club?
          </li>
          <li className="p-main">
            What do you like and dislike about the current resources you are
            given on clubs?
          </li>
          <li className="p-main">
            What do you like and dislike about current resources you are given
            on clubs?
          </li>
          <li className="p-main">
            When during the semester are you most and least involved in student
            clubs?
          </li>
          <li className="p-main">
            How was your experience with MICA’s involvement fair?
          </li>
          <li className="p-main">
            If you could create a student club, what would it be? And how would
            you propose it? What has prevented you from creating the club?
          </li>
        </ul>
        <div className="p-main">Here's my main findings</div>
        <div className="h2">
          1. Students are a lot more interested in specific events more than
          regular club meetings
        </div>
        <div className="h2">
          2. Students will join multiple clubs during the beginning of the
          semester, but will lose interest at the end of the semester.
        </div>
      </div>
    </Content>

    <Content>
      <div className="left-img top-conent">
        <img className="left-img-multiple" src={ImgSvaA} alt="" />
        <img className="left-img-multiple" src={ImgSvaB} alt="" />
      </div>
      <div className="content-text top-conent">
        <div className="label-secondary-top">Stakeholder interviews</div>
        <div className="p-main">
          I interviewed Bella, the director of the Center for Student
          Engagement. She and the center keep students involved on campus and
          overlook student clubs.
        </div>
        <div className="p-main">
          Bella talked about the problems of the current system:{" "}
        </div>
        <div className="h2">
          Emails can be delayed, posters might go unnoticed, the MICA website is
          not intuitive, and student organization information is very scattered.{" "}
        </div>
        <div className="p-main">
          She also said a mobile platform would be essential for this product,
          as students are very accustomed to phones.
        </div>
      </div>
    </Content>

    <Content>
      <div></div>
      <div className="content-text">
        <div className="label-secondary">User persona</div>
        <div className="right-img-group">
          <div className="full">
            <img src={ImgPersona} alt="" />
          </div>
        </div>
        <div className="label-secondary">Feature definition</div>
        <div className="p-main">
          Upon synthesizing the research and user interviews, I decided that
          that the most important features should be:
        </div>
        <div className="h2">
          1. Stay on track of activities with an personal event schedule
        </div>
        <div className="h2">2. Discover new events</div>
        <div className="h2">3. Propose new clubs</div>
        <div className="label-secondary">Sketches</div>
        <div className="right-img-group">
          <div className="full">
            <img src={ImgSketches} alt="" />
          </div>
        </div>
      </div>
    </Content>

    <Content>
      <div></div>
      <div className="content-text">
        <div className="label-secondary">Determining club categories </div>
        <div className="right-img-group">
          <div className="full">
            <img src={ImgSort} alt="" />
          </div>
        </div>
        <div className="p-main">
          From the similarity matrix and category results, I determined the
          major categories of MICA clubs as:
        </div>
        <ul className="category-list">
          <div className="list-a">
            <li className="p-main">Art</li>
            <li className="p-main">Culture</li>
            <li className="p-main">Hobbies</li>
            <li className="p-main">LGBTQ+</li>
          </div>
          <div className="list-b">
            <li className="p-main">Recreational</li>
            <li className="p-main">Religion</li>
            <li className="p-main">Social Action</li>
          </div>
        </ul>
        <div className="label-secondary">Club component design</div>
        <div className="p-main">
          I filtered out the most important club information identified by
          students. They can be seen in blue
        </div>
        <ul className="category-list">
          <div className="list-a">
            <li className="p-main secondary">Club name</li>
            <li className="p-main">Club description</li>
            <li className="p-main">Organizer/President</li>
            <li className="p-main">Organizer Email</li>
            <li className="p-main secondary">Meeting times</li>
          </div>
          <div className="list-b">
            <li className="p-main">Location</li>
            <li className="p-main secondary">Activity image</li>
            <li className="p-main secondary">Category</li>
            <li className="p-main secondary">Upcoming events</li>
          </div>
        </ul>
      </div>
    </Content>
    <div className="reg-margin ">
      <img className="full-img" src={ImgComp} alt="" />
    </div>
    <Content>
      <div></div>
      <div className="content-text">
        <div className="label-secondary">
          Wireframes for Activity exploration
        </div>
        <div className="p-main">
          I explored a variety of layouts that convey club information. Here are
          some of my evaluations and testing results.
        </div>
      </div>
    </Content>
    <div className="reg-margin ">
      <img className="full-img" src={ImgExploreA} alt="" />
      <img className="full-img" src={ImgExploreB} alt="" />
      <img className="full-img" src={ImgExploreC} alt="" />
    </div>
    <Content>
      <div></div>
      <div className="content-text">
        <div className="label-secondary">Final exploration design</div>
        <div className="p-main">
          After my design exploration and inquiring the users, I decided to
          utilize a spacious horizontal club layout that displays imagery, club
          name, meeting times, and category. This information was deemed the
          most useful for students when deciding what clubs to join.
        </div>
        <div className="p-main">
          I decided search should be a secondary function, as students aren’t
          always exactly sure of what clubs to find. However, I highlighted
          categories with chips component to help users narrow down their
          preferred clubs.  
        </div>
      </div>
    </Content>
    <div className="reg-margin ">
      <img className="full-img" src={ImgExploreFinalA} alt="" />
      <img className="full-img" src={ImgExploreFinalB} alt="" />
    </div>
    <Content>
      <div></div>
      <div className="content-text">
        <div className="label-secondary">
          Creating an event based experience
        </div>
        <div className="p-main">
          During my interview process, I learned that students get caught up
          with their schedules and forget about student organizations. Many
          students also told me that they care more about the club activity than
          the overall theme of the club.
        </div>
        <div className="p-main">
          With this in mind, I decided that the product should be inherently
          event based, similar to a calendar.
        </div>
      </div>
    </Content>
    <div className="reg-margin ">
      <img className="full-img" src={ImgCalendarA} alt="" />
      <img className="full-img" src={ImgCalendarB} alt="" />
    </div>
    <Content>
      <div></div>
      <div className="content-text">
        <div className="p-main">
          The calendar highlights clubs that the student have followed. However,
          often times, a student not a part of a club would want to join a
          particular club meeting if their schedule allows or if they are
          interested. I also included additional events and meetings of the day
          that are worth attending.
        </div>
        <div className="p-main">
          I separated the calendar into day view and month view. The day view
          can be used for learning the in-depth schedule of the day, and
          the month view can be used for learning about how various clubs fits
          into a student’s overall schedule.
        </div>
        <div className="p-main">
          I also explored a personalized messaging feature, where club owners
          can send custom messages to students regarding their upcoming club
          meeting. When talking to students, I also learned that many are more
          inclined to learn about the club from a member’s perspective.
        </div>
      </div>
    </Content>
    <div className="reg-margin ">
      <img className="full-img" src={ImgFinalCalendarA} alt="" />
    </div>
    <Content>
      <div></div>
      <div className="content-text">
        <div className="label-secondary">Final event calendar</div>
      </div>
    </Content>
    <div className="reg-margin ">
      <img className="full-img" src={ImgFinalCalendarB} alt="" />
    </div>
    <Content>
      <div></div>
      <div className="content-text">
        <div className="label-secondary">Manage and create clubs</div>
        <div className="p-main">Current procedure for prosoping a new club</div>
      </div>
    </Content>
    <div className="reg-margin ">
      <img className="full-img" src={ImgCurrentProposal} alt="" />
    </div>
    <Content>
      <div></div>
      <div className="content-text">
        <div className="p-main">A new way of creating new clubs</div>
      </div>
    </Content>
    <div className="reg-margin ">
      <img className="full-img" src={ImgNewPor} alt="" />
    </div>
    <Content>
      <div></div>
      <div className="content-text">
        <div className="label-secondary">Reflection</div>
        <div className="p-main">
          Let users inform your design decisions. This project involves a
          variety of user research, from user interviews, to card sorting and
          testing. By talking and testing with users, I generated design
          opportunities and goals that I would not have known.
        </div>
        <div className="p-main">
          Iterate designs to test concepts. I produced numerous card and layout
          designs. By evaluating these designs, I could see which concepts work
          and which didn’t.
        </div>
        <Back />
      </div>
    </Content>
    <Connect />
  </div>
);
