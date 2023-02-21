import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./NewsLetter.css";

import mailBoxIllustration from "../Assets/mailbox.png";
import useLoader from "../Hooks/useLoader";

//for emailjs
const SERVICE_ID = "service_8ha85yf";
const TEMPLATE_ID = "template_bagdq3p";
const API_KEY = "HhA-gjSCWsIVaC0tu";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [loader, isLoading, setIsLoading] = useLoader();
  const form = useRef();

  const emailSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, API_KEY).then(
      (result) => {
        if (result.text === "OK") {
          setIsLoading(false);
          alert("Email Sent Successfully!");
        }
      },
      (error) => {
        console.log(error.text);
        setIsLoading(false);
        alert("Failed sending email!");
      }
    );

    setEmail("");
  };
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
          <form
            className="newsletter__content--sub"
            onSubmit={emailSubmitHandler}
            ref={form}
          >
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
              value={email}
            />
            <button>Subscribe</button>
            {loader}
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
