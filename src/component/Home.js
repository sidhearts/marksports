import React, { useEffect } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../stylesheets/home.css";
import { Parallax } from "react-parallax";

function Home() {
  const inlineStyle = {
    left: "50%",
    top: "50%",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    color: "white",
  };

  return (
    <div className="main">
      <div className="content pb-5">
        <Parallax bgImage="/images/bg.jpg" strength={500}>
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
          <h1 id="career" className="texts pt-5">
            Career
          </h1>
          <hr className="head-hr" width="200px" />
          <div className="text-center texts">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
