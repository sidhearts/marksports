import React, { useEffect } from "react";
import "../stylesheets/home.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Talent() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="content pb-5">
      <div className="container" id="main">
        <h1 id="talent" className="texts pt-3">
          <u>Talent</u>
        </h1>
        <Container className="pt-5">
          <Row>
            <Col xs={12} md={6} className="texts talent-box p-3">
              <h3>How are we beneficial to you?</h3>
              <br />
              Seeking recognition ?<br />
              Being a sports person isn’t easy, maintaining your best self
              on-field and off-field gets a little difficult, Don’t worry
              markSports got your back.
              <br />
              Need Brand elevation with a star face?
              <br />
              Companies often aren’t able to get sportsperson for as their brand
              face, Don’t worry markSports is here for you.
              <h4 className="py-3t">So, how do we help you?</h4> We bring
              together the players who need recognition and the companies who
              need sportsperson for advertising their brands which gives the
              player the recognition they deserve and the companies increase
              their brand awareness that increases their sales.
            </Col>
            <Col xs={12} md={6}>
              <img
                data-aos="zoom-in"
                className="img-fluid drop"
                src="/images/sports.png"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="my-4" style={{ background: "black" }}>
        <div className="container texts py-5">
          <div className="">
            <h1>Our Provisions</h1>
            <div className="service-box p-3 d-block d-md-none">
              <h4>Services for Sportsmen</h4>
              <ol>
                <li>Endorsements/Sponsorship and Consultancy</li>
                <li>Brand Ambassador/Commercials</li>
                <li>Merchandise and Equipment Procurement</li>
                <li>Image Building / Branding</li>
                <li>Social Media Management</li>
                <li>PR Management</li>
              </ol>
            </div>
            <div className="d-none d-md-block">
              <h3 className="py-3">Services for Sportsmen</h3>
              <div className="row ">
                <div className="col-6">
                  <div className="service-box mt-3 mx-5 p-4">
                    <ul>
                      <li>Endorsements/Sponsorship and Consultancy</li>
                      <li>Brand Ambassador/Commercials</li>
                      <li>Merchandise and Equipment Procurement</li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="service-box mt-3 mx-5 p-4">
                    <ul>
                      <li>Image Building / Branding</li>
                      <li>Social Media Management</li>
                      <li>PR Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div data-aos="fade-up" className="carousel-box mt-5">
          <Carousel className="p-2 p-md-3">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/anuj-rawat.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/harsh-tyagi.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/himmat-singh.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/lalit-yadav.png"
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/manjot-kalra.png"
                alt="Fifth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
