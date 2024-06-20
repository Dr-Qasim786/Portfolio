import React, { useState } from "react";
import "./header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home")
  return (
    <header className="header">
      <div className="nav container">
        <a href="index.html" className="nav__logo">
          Qasim
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bx-home-alt nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bx-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualification" onClick={() => setActiveNav('#qualification')} className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bxs-graduation nav__icon"></i> Qualification
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bx-cog nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#publications" onClick={() => setActiveNav('#publications')} className={activeNav === "#publications" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bx-news nav__icon"></i> Publications
              </a>
            </li>

            <li className="nav__item">
              <a href="#conferences" onClick={() => setActiveNav('#conferences')} className={activeNav === "#conferences" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bx-podcast nav__icon"></i> Conferences
              </a>
            </li>

            <li className="nav__item">
              <a href="#workshops" onClick={() => setActiveNav('#workshops')} className={activeNav === "#workshops" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bx-store-alt nav__icon"></i> Workshops
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#research" onClick={() => setActiveNav('#research')} className={activeNav === "#research" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bx-image nav__icon"></i> Research
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bx-send nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="bx bx-x nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i class="bx bx-grid-alt"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
