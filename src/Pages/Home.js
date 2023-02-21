import React from "react";

import "./Home.css";

import Button from "../UI/Button";

import bannerImage from "../Assets/bannerimg.png";
import appPrototypes from "../Assets/appdesign.png";

import getFromAppStore from "../Assets/getfromappstore.png";
import getFromPlayStore from "../Assets/getfromplaystore.png";
import mailBoxIllustration from "../Assets/mailbox.png";

import { AiFillNotification } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <main>
      <section className="container">
        <div className="hero">
          <h1>
            Reform the Way Teams Manage <span>Projects</span>
          </h1>
          <p>
            Say goodbye to manual processes and hello to a smarter way of
            managing projects with our innovative solution
          </p>
          <Button className="hero__btn">Disocver now</Button>
        </div>
      </section>
      <section className="banner">
        <div className="container">
          <div className="banner__img">
            <img
              src={bannerImage}
              alt="dashboard app screenshot to describe visually some features"
            />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="features">
          <h3>Our Features</h3>
          <p>Manage projects like a pro with our intuitive features</p>
          <div className="features__list">
            <div>
              <div className="features__list--image">
                <MdManageAccounts style={{ fontSize: "42px" }} />
              </div>
              <h4>Team Collaboration</h4>
              <p>The way we work together determines the way we succeed. </p>
            </div>
            <div>
              <div className="features__list--image">
                <FaTasks style={{ fontSize: "36px" }} />
              </div>
              <h4>Project Mangement</h4>
              <p>The way we work together determines the way we succeed. </p>
            </div>
            <div>
              <div className="features__list--image">
                <AiFillNotification style={{ fontSize: "36px" }} />
              </div>
              <h4>Notifications</h4>
              <p>The way we work together determines the way we succeed. </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="app">
          <h3>App Comming Soon</h3>
          <div className="app__protypes">
            <img src={appPrototypes} />
          </div>
          <div className="app_actions">
            <a href="#">
              <img src={getFromPlayStore} alt="visit app store " />
            </a>
            <a href="#">
              <img src={getFromAppStore} alt="visit app store " />
            </a>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="newsletter">
          <div className="newsletter__img">
            <img
              src={mailBoxIllustration}
              alt="illustration describing mailbox"
            />
          </div>
          <div className="newsletter__content">
            <h4>Subscribe to our Newsletter</h4>
            <p>
              Be the first to know about our new products, services, and
              upcoming events by subscribing to our newsletter
            </p>
            <div className="newsletter__content--sub">
              <input
                type="email"
                name="newsletterEmail"
                placeholder="Enter your email"
              />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
