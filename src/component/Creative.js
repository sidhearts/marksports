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
    background-color: #fabe33;
  }

  .panel.turqoise {
    background-color: #0079ba;
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
                <h3 className="p-5">
                  Monk-E - As a 360° creative media organisation, we ensure that
                  your brand has it all to catch eyeballs
                </h3>
              </div>
              <div className="col-6 col-md-4 p-0">
                <div className="service-card d-lg-flex align-items-end">
                  <div className="p-3 pb-md-5">
                    <h3 className="texts">
                      Social Media Handling and Management
                    </h3>
                    <p className="texts service-links">
                      Redefining digital marketing with the influencers that
                      help your brand grow.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-0">
                <div className="service-card d-lg-flex align-items-end">
                  <div className="p-3 pb-md-5">
                    <h3 className="texts">Brand Portfolio and Management</h3>
                    <p className="texts service-links">
                      Redefining digital marketing with the influencers that
                      help your brand grow.
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
                  <h3 className="p-5">
                    Brand/Products/Office 360° and Spherical Photography
                  </h3>
                  <p className="texts p-2">
                    Redefining digital marketing with the influencers that help
                    your brand grow.
                  </p>
                </div>
                <div className="col-6 col-md-4 pr-0">
                  <div className="service-card d-lg-flex align-items-end">
                    <div className="p-3 pb-md-5">
                      <h3 className="texts">
                        Promotional/ Corporate Merchandise Solution
                      </h3>
                      <p className="texts service-links">
                        Redefining digital marketing with the influencers that
                        help your brand grow.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 p-0">
                  <div className="service-card d-lg-flex align-items-end">
                    <div className="p-3 pb-md-5">
                      <h3 className="texts">Web Portfolio and Management</h3>
                      <p className="texts service-links">
                        Redefining digital marketing with the influencers that
                        help your brand grow.
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
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-1.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-2.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-3.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-4.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-5.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-6.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-7.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-8.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-9.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-10.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-11.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-12.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-13.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-14.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-15.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col xs={3} className="p-2 p-md-3">
                      <img
                        src="/images/logo-16.png"
                        alt="brand"
                        className="rounded img-fluid"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </section>
          </Tween>
          <Tween from={{ y: "100%" }} to={{ y: "0%" }}>
            <section className="panel turqoise">
              <div className="row p-5">
                <div className="col-12 col-md-4 pt-5">
                  <h1 className="text-left texts">Our Work:</h1>
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
// import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import "../stylesheets/home.css";

// export default function Creative() {
//   return (
//     <div>

//       <div className="outer-wrapper">
//         <div className="wrapper">
//           <div className="slides one">
//             <div className="row">
//               <div className="col-4 mt-5">
//                 <h1 className="texts text-left mt-5 pt-5 p-5">
//                   Monk-E - As a 360° creative media organisation, we ensure that
//                   your brand has it all to catch eyeballs
//                 </h1>
//               </div>
//               <div className="col-4" style={{background: "yellow"}}></div>
//               <div className="col-4" style={{background: "green"}}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div style={{ height: "100vh" }}>
//         <div className="row">
//           <div className="col-4" style={{background: "orange"}}>
//           Monk-E - As a 360° creative media organisation, we ensure that
//                   your brand has it all to catch eyeballs
//           </div>
//           <div className="col-4" style={{background: "pink"}}></div>
//           <div className="col-4" style={{background: "yellow"}}></div>
//         </div>
//       </div>
//       <div style={{ height: "100vh" }}>2</div>
//       <div style={{ height: "100vh" }}>3</div>
//     </div>
//   );
// }
