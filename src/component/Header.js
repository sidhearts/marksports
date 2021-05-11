import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Parallax } from "react-parallax";
import "../stylesheets/home.css";

export default function Header() {
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

  return (
    <div>
      <div className="container">
        <Navbar
          fixed="top"
          variant="dark"
          expand="lg"
          className={
            navbar ? "landing-navbar active mb-5" : "landing-navbar mb-5"
          }
        >
          <Navbar.Brand href="/home" className="brand ml-md-5">
            <img src="/images/logo.png" style={{ width: "25vh" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-md-5">
            <Nav.Link href="/home" className="links">
                <b>HOME</b>
              </Nav.Link>
              <Nav.Link href="https://themarksports.online/" target="_blank" className="links">
                <b>NEWS</b>
              </Nav.Link>
              <Nav.Link href="/talent#main" className="links">
                <b>TALENT</b>
              </Nav.Link>
              <Nav.Link href="/brands#main" className="links">
                <b>BRANDS</b>
              </Nav.Link>
              <Nav.Link href="/home#career" className="links">
                <b>CAREER</b>
              </Nav.Link>
              <Nav.Link href="/home#about" className="links">
                <b>ABOUT</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Parallax bgImage="/images/bg.jpg" strength={500}>
        <div style={{ height: 700 }}>
          <div style={inlineStyle}>
            <h1>
              <strong>
                We make it easy for brands to partner with athletes
              </strong>
              <br />
              <br />
              <div className="arrow bounce">
                <a href="#main">
                  <img src="/images/arrow.png" />
                </a>
              </div>
            </h1>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
