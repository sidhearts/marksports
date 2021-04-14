import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import "../stylesheets/home.css";

function Home() {
  return (
    <div className="content py-5" id="main">
      <div id="about" className="about-box" style={{ background: "white" }}>
        <h1 className="pt-2">
          <u>ABOUT US</u>
        </h1>
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
          {/* <h1 className="pt-2">
            <u>Career</u>
          </h1> */}
          <div className="p-3 text-left">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <form action="https://formspree.io/f/meqvqynj" method="POST">
                    <p className="h5 text-center my-4">
                      <b>
                        <u>CAREER</u>
                      </b>
                    </p>
                    <div className="grey-text">
                      <MDBInput
                        label="Your name"
                        name="name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Location (City)"
                        name="location"
                        icon="map-marker-alt"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Your email"
                        name="email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Phone Number"
                        name="phone"
                        icon="mobile-alt"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Position Applied For"
                        name="position"
                        icon="plus-square"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        type="textarea"
                        name="message"
                        rows="2"
                        label="Your message"
                        icon="pencil-alt"
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn type="submit" outline color="secondary">
                        Send
                        <MDBIcon far icon="paper-plane" className="ml-1" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>

                <MDBCol md="6">
                  <form action="https://formspree.io/f/mzbybnyn" method="POST">
                    <p className="h5 text-center my-4">
                      <b>
                        <u>SUBSCRIBE</u>
                      </b>
                      <br />
                      <br />
                      <small>
                        Signup for our weekly newsletter and discover what's
                        brewing in the world of Sports and Corporate Industry.
                      </small>
                    </p>
                    <div className="grey-text">
                      <MDBInput
                        label="Your name"
                        icon="user"
                        name="name"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Your email"
                        icon="envelope"
                        name="email"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Phone Number"
                        icon="phone-alt"
                        name="phone number"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn outline type="submit" color="info">
                        Subscribe
                        <MDBIcon
                          far
                          icon="play-circle"
                          size="lg"
                          className="ml-1"
                        />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
