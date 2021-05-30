import React from "react";
import "../stylesheets/home.css";

export default function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container">
          <section className="p-2">
            <a
              className="btn btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="https://m.facebook.com/pages/category/Product-Service/markSportsonline-111165667423881/"
              target="_blank"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/INDmarkSports?s=09"
              target="_blank"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              target="_blank"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="https://www.instagram.com/marksports.online/"
              target="_blank"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/company/marksports-in"
              target="_blank"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </section>
          <div className="row">
            <div className="col-12 col-md-4 p-3">
              Interested in working with us?
              <a className="text-white" href="mailto:info.marksports@gmail.com">
                info.marksports@gmail.com
              </a>
            </div>
            <div className="col-12 col-md-4 p-3">
              CAREER<br /> 
              <a
                className="text-white"
                href="mailto:career.marksports@gmail.com"
              >
                career.marksports@gmail.com
              </a>
            </div>
            <div className="col-12 col-md-4 p-3">
              Address : Dhandhania House, Gola Road, Koat Bazar, Sitamarhi, Bihar - 843302
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0,0, 0, 0.2)" }}
        >
          © 2021 Copyright:
          <a className="text-white" href="http://marksports.herokuapp.com/">
            markSPORTS
          </a>
        </div>
      </footer>
    </div>
  );
}
