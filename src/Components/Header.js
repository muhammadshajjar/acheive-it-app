import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./Header.css";

//assets import
import logo from "../Assets/logo.png";

//icons
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <header className="container header">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="company logo" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav--cta">
            <li>
              <Link to="auth" className="header__nav--login">
                Log in
              </Link>
            </li>
            <li>
              <Link to="auth" className="header__nav--signup">
                Try for free
                <AiOutlineArrowRight />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
