import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Hafiz Muhammad Qasim</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#publications" className="footer__link">
              Publications
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://scholar.google.com/citations?user=reTT5GIAAAAJ&hl=en" className="footer__social-link" target="_blank">
            <i class="fa-brands fa-google-scholar"></i>
          </a>
          <a href="https://www.linkedin.com/in/dr-hafiz-muhammad-qasim-522a7a137" className="footer__social-link" target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Hafiz Muhammad Qasim. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
