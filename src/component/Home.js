import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Button,
  Carousel,
  Modal,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "../stylesheets/home.css";
import { Parallax } from "react-parallax";
import "aos/dist/aos.css";
import Aos from "aos";

function Home() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const inlineStyle = {
    left: "50%",
    top: "50%",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    color: "white",
  };

  window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="main">
      <div className="container">
        <Navbar
          fixed="top"
          variant="dark"
          expand="lg"
          className={
            navbar ? "landing-navbar active mb-5" : "landing-navbar mb-5"
          }
        >
          <Navbar.Brand href="#home" className="brand ml-md-5">
            <img src="/images/logo.png" style={{ width: "25vh" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-md-5">
              <Nav.Link href="#talent" className="links">
                TALENT
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                BRANDS
              </Nav.Link>
              <Nav.Link className="links">CAREER</Nav.Link>
              <Nav.Link href="#link" className="links">
                ABOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="content" style={{ height: "300vh" }}>
        <Parallax bgImage="/images/football.jpg" strength={500}>
          <div style={{ height: 700 }}>
            <div style={inlineStyle}>
              <h1>
                <strong>
                  We make it easy for brands to partner with athletes.
                </strong>
                <br />
                <br />
                <div class="arrow bounce">
                  <a class="fa fa-arrow-down fa-2x" href="#talent">
                    <img src="/images/arrow.png" />
                  </a>
                </div>
              </h1>
            </div>
          </div>
        </Parallax>
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Col>
              <Col xs={12} md={6}>
                <img className="img-fluid drop" src="/images/sports.png" />
              </Col>
            </Row>
          </Container>
          <div className="carousel-box mt-5">
            <Carousel className="p-3 p-md-5">
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

      {/* Footer */}
    </div>
  );
}

export default Home;
