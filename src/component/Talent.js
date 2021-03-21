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
    <div className="content py-5">
      <div className="container">
        <h1 id="talent" className="texts pt-3">
          Talent
        </h1>
        <hr className="head-hr" width="200px" />
        <Container className="pt-5">
          <Row>
            <Col xs={12} md={6} className="texts">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
        <div data-aos="fade-up" className="carousel-box mt-5">
          <Carousel className="p-2 p-md-3">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/virat.jpeg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/virat.jpeg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/virat.jpeg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
