import React from "react";

import "./Home.css";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import PrayerTime from "../Components/PrayerTime";
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
    </main>
  );
};

export default Home;
