import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/home.css";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Brands() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="content pb-5">
      <div className="container" id="main">
        <h1 id="brands" className="texts pt-5">
          <u><b>Brands</b></u>
        </h1>
        <div className="text-center texts">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div
        id="about"
        className="about-box my-5"
        style={{ background: "white" }}
      >
        <div className="container-fluid">
          <Container>
            <Row>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-1.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-2.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-3.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-4.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-5.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-6.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-7.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-8.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-9.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-10.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-11.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-12.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-13.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-14.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-15.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
              <Col xs={6} md={3} className="p-2 p-md-3">
                <img
                  data-aos="zoom-in"
                  src="/images/logo-16.png"
                  alt="brand"
                  className="rounded img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
