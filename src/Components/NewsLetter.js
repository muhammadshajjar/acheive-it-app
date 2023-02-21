import React from "react";

import "./NewsLetter.css";

import mailBoxIllustration from "../Assets/mailbox.png";

const NewsLetter = () => {
  return (
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
            Be the first to know about our new products, services, and upcoming
            events by subscribing to our newsletter
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
  );
};

export default NewsLetter;
