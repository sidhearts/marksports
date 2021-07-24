import React from "react";
import "../stylesheets/home.css";

export default function Services() {
  return (
    <div className="container-fluid services">
      <div className="row p-5">
        <div className="col-12 col-md-2 pt-5">
          <h1 className="text-left texts">Our Work:</h1>
        </div>
        <div className="col-12 col-md-10 pt-5">
          <div className="row">
            <div className="col-12 col-md-4 d-flex justify-content-center p-2">
              <a href="#">
                <div
                  className="card-box p-3"
                  style={{ width: "18rem", backgroundColor: "black" }}
                >
                  <img className="img-fluid" src="images/bg.jpg"></img>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center p-2">
              <a href="#">
                <div
                  className="card-box p-3"
                  style={{ width: "18rem", backgroundColor: "black" }}
                >
                  <img className="img-fluid" src="images/bg.jpg"></img>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center p-2">
              <a href="#">
                <div
                  className="card-box p-3"
                  style={{ width: "18rem", backgroundColor: "black" }}
                >
                  <img className="img-fluid" src="images/bg.jpg"></img>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 d-flex justify-content-center p-2">
              <a href="#">
                <div
                  className="card-box p-3"
                  style={{ width: "18rem", backgroundColor: "black" }}
                >
                  <img className="img-fluid" src="images/bg.jpg"></img>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center p-2">
              <a href="#">
                <div
                  className="card-box p-3"
                  style={{ width: "18rem", backgroundColor: "black" }}
                >
                  <img className="img-fluid" src="images/bg.jpg"></img>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center p-2">
              <a href="#">
                <div
                  className="card-box p-3"
                  style={{ width: "18rem", backgroundColor: "black" }}
                >
                  <img className="img-fluid" src="images/bg.jpg"></img>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="other" class="row p-3">
          <div className="col">
              <h5 className="texts p-1">Ad Shoot</h5>
          </div>
          <div className="col">
              <h5 className="texts p-1">SEO Optimization</h5>
          </div>
          <div className="col">
              <h5 className="texts p-1">Copy Editing</h5>
          </div>
          <div className="col">
              <h5 className="texts p-1">Music Production</h5>
          </div>
      </div>
      <div className="row">
          <div className="col p-4">
              <div className="card-box p-2" style={{backgroundColor: "white"}}>
                  <h4>Graphic Designing</h4>
                  <ul className="text-left">
                      <li>Visual Identity Graphic Design</li>
                      <li>Marketing and Advertising Graphic Design</li>
                      <li>User Interface Graphic Design</li>
                      <li>Publication Graphic Design</li>
                      <li>Packaging Graphic Design</li>
                      <li>Art and Illustration</li>
                      <li>Social Media Design</li>
                      <li>Meme</li>
                  </ul>
              </div>
          </div>
          <div className="col p-4">
              <div className="card-box p-2" style={{backgroundColor: "white"}}>
                  <h4>Video Editing</h4>
                  <ul className="text-left">
                      <li>Linear Editing</li>
                      <li>Non-linear video editing</li>
                      <li>Initial assembly</li>
                      <li>Rough cut</li>
                      <li>Final cut</li>
                      <li>Color Correction and Color Grading</li>
                      <li>Editing Based On Theme</li>
                      <li>Compression, Aspect Ratio and Bit Rate Manipulation</li>
                  </ul>
              </div>
          </div>
          <div className="col p-4">
              <div className="card-box p-2" style={{backgroundColor: "white"}}>
                  <h4>Content Writing</h4>
                  <ul className="text-left">
                      <li>SEO Content Writing</li>
                      <li>Technical Writing</li>
                      <li>Communication and Marketing Writing</li>
                      <li>Publication Based and Editorial Writing</li>
                      <li>Instructional Design</li>
                      <li>Feature Writing</li>
                      <li>Copywriting</li>
                      <li>Blogging</li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  );
}
