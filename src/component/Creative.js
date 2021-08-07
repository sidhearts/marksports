import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import "../stylesheets/home.css";

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }

  .panel.yellow {
    background-color: #ffc300;
  }

  .panel.turqoise {
    background-color: #ffc300;
  }

  .panel.white {
    background-color: #ffffff;
  }

  .panel.bordeaux {
    background-color: #953543;
  }
`;

const Creative = () => (
  <SectionWipes2Styled>
    <Controller>
      <Scene triggerHook="onLeave" duration="300%" pin>
        <Timeline wrapper={<div id="pinContainer" />}>
          <section className="panel yellow pt-5 pt-md-0">
            <div className="row text-left">
              <div className="col-12 col-md-4 d-flex align-items-end">
                <h3 className="p-2 p-md-5">
                  markSPORTS : As an all-rounder media and production
                  organization, we ensure that your brand gets all the
                  nourishment to grow it big!
                </h3>
              </div>
              <div className="col-6 col-md-4 p-0">
                <div className="service-card service-brand d-lg-flex align-items-end">
                  <div className="p-3 pb-md-5">
                    <h3 className="texts">Branding</h3>
                    <p className="texts service-links">
                      Creating and Maintaining A Unique Brand Identity For You.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-0">
                <div className="service-card service-video d-lg-flex align-items-end">
                  <div className="p-3 pb-md-5">
                    <h3 className="texts">
                      Graphic Designing and Video Editing/ Music Production
                    </h3>
                    <p className="texts service-links">
                      Want Static/Dynamic Content For Your Brand? Just Leave It
                      On Us OR Bless Your Client’s Ears With Good Music.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel green pt-5 pt-md-0">
              <div className="row text-left">
                <div className="col-12 col-md-4 d-md-flex align-items-end">
                  <div className="pb-md-5">
                    <h3 className="px-5 pt-5">Website Building</h3>
                    <p className="texts px-5 pb-5">
                      If Finding A Way To Make Online Presence, Then You Are At
                      The Right Place.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-4 pr-0">
                  <div className="service-card service-social d-lg-flex align-items-end">
                    <div className="p-3 pb-md-5">
                      <h3 className="texts">Social Media Management</h3>
                      <p className="texts service-links">
                        Find All The Content Types To Grow Your Business!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 p-0">
                  <div className="service-card service-content d-lg-flex align-items-end">
                    <div className="p-3 pb-md-5">
                      <h3 className="texts">Content Writing </h3>
                      <p className="texts service-links">
                        Writing Is What Makes a Big Difference, And Here We Are
                        To Make A Difference.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Tween>
          <Tween from={{ y: "100%" }} to={{ y: "0%" }}>
            <section className="panel white">
              <div className="row p-5">
                <div className="col-12 col-md-4">
                  <h1 className="text-left pt-5">Our Clients so far:</h1>
                </div>
                <div className="col-12 col-md-8">
                  <Row>
                    <Col xs={6} md={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-1.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={6} md={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-2.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={6} md={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-3.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={6} md={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-4.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-5.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default Creative;
