import React from "react";

import "./Footer.css";

import { Link } from "react-router-dom";

import footerLogo from "../Assets/Logosloganless.png";

import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <img src={footerLogo} onClick={scrollToTopHandler} />

          <ul className="footer__content--links">
            <li>
              <Link to="/auth">Log in</Link>
            </li>
            <li>
              <Link to="/auth">Try for free</Link>
            </li>
          </ul>
          <p className="footer__content--copyright">
            Copyright © 2023 Acheive IT. All rights reserved.
          </p>
        </div>
        <div className="attribution">
          <p>
            Design and Developed by <span>Zee&Tee</span> solutions with
            <AiFillHeart
              style={{ color: "#cf225d", marginLeft: "4px", fontSize: "18px" }}
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
