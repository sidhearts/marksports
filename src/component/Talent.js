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
          Talent
        </h1>
        <hr className="head-hr" width="200px" />
        <Container className="pt-5">
          <Row>
            <Col xs={12} md={6} className="texts">
              <h3>How are we beneficial to you?</h3><br />
              Seeking recognition ?<br />
              Being a
              sports person isn’t easy, maintaining your best self on-field and
              off-field gets a little difficult, Don’t worry markSports got your
              back.<br />
              Need Brand elevation with a star face?<br />
              Companies often
              aren’t able to get sportsperson for as their brand face, Don’t
              worry markSports is here for you. 
              <h4>So, how do we help you?</h4> We bring
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
