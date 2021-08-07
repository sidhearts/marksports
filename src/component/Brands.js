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
          <u>
            <b>Brands</b>
          </u>
        </h1>
        <div className="text-center texts">
          We are a lot of enthusiastic trailblazers who are driven by probably
          the most trustworthy names in the business. So when you tap onto the
          advanced universe with us, we guarantee you are heard without becoming
          mixed up in the reverberation of patterns. You have a brand? Let us
          tell your story and leave it to us for a seamless execution right from
          the start.
        </div>
      </div>
      <div className="my-4" style={{ background: "black" }}>
        <div className="container texts py-5">
          <div className="">
            <h1>Our Provisions</h1>
            <div className="service-box p-3 d-block d-md-none">
              <h4>Services for Sportsmen</h4>
              <ol>
                <li>Marketing/Ad Campaing</li>
                <li>Product Launch</li>
                <li>Commercial and Avertisements Shoot</li>
                <li>Social Media Management</li>
                <li>Product Video Production</li>
                <li>Product and Service Branding</li>
              </ol>
            </div>
            <div className="d-none d-md-block">
              <h3 className="py-3">Services for Company</h3>
              <div className="row ">
                <div className="col-6">
                  <div className="service-box mt-3 mx-5 p-4">
                    <ul>
                      <li>Marketing/Ad Campaing</li>
                      <li>Product Launch</li>
                      <li>Commercial and Avertisements Shoot</li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="service-box mt-3 mx-5 p-4">
                    <ul>
                      <li>Social Media Management</li>
                      <li>Product Video Production</li>
                      <li>Product and Service Branding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
