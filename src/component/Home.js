import React, { useEffect } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../stylesheets/home.css";

function Home() {
  return (
    <div className="content py-5" id="main">
      <div id="about" className="about-box" style={{background: "white"}}>
        <h1 className="pt-2">
          <u>ABOUT US</u>
        </h1>
        {/* <hr className="head-hr" width="200px" /> */}
        <div className="container-fluid">
          <div className="row p-5">
            <div className="col-12 col-md-4 text-left">
              <h3>
                <img src="/images/info.png" className="img-fluid" /> Who we are?
              </h3>
              <p>
                markSPORTS is a company that deals with uncapped players and
                help them in getting endorsements, marketing and Ads campaign,
                Field play sponsorships and player columns. Through us the
                sportsperson will be able to have links with the MSME's or
                Startups which will simultaneously assist them in getting
                advertising and marketing. We will make the communication stable
                and more active between the MSME's or Startups and the
                sportsperson.
              </p>
            </div>
            <div className="col-12 col-md-4 text-left">
              <h3>
                <img src="/images/mission.png" className="img-fluid" /> Our
                Mission
              </h3>
              <p>
                To bring sportsmanship back in the country and to transform
                subsisting players into well known one's by giving them
                different stages to make them meet fame and excellence that will
                set them apart from others. We intends to increase India's
                displaying potential of sport's and expect to be a crucial part
                in making India an overall wearing awe-inspiring phenomenon.
              </p>
            </div>
            <div className="col-12 col-md-4 text-left">
              <h3>
                <img src="/images/vision.png" className="img-fluid" /> Our
                Vision
              </h3>
              <p>
                We aim to turn into the best organization by offering the best
                types of assistance to athletes that makes them famous all
                around the world by building solid connections between MSME's,
                Regional brands , new businesses and to construct a culture of
                sports greatness in India and usher in a change in in the manner
                in which it is seen in the country, through the expert
                administration of sports groups and competitors.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="mt-3 texts">
          Want to <span className="x">EXPLORE</span> more?
        </h1>

        <div className="skewed-div my-5">
          <div className="talent-skew text-wrap">
            <a href="/talent" className="text-links text-wrap">
              TALENT
            </a>
          </div>
          <div className="brands-skew">
            <a href="/brands" className="text-links">
              BRANDS
            </a>
          </div>
        </div>

        <div id="career" className="carousel-box my-5">
          <h1 className="pt-2">Career</h1>
          <hr className="head-hr" width="200px" />
          <div className="text-center p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
