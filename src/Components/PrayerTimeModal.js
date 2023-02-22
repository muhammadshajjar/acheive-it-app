import React, { useEffect, useState } from "react";
import "./PrayerTimeModal.css";

//components
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Countdown from "react-countdown";

//assets
import azzaanAudio from "../Assets/azzaan.mp3";

const FIFTEENMINUTESTIMMER = 1000 * 60 * 15;

const PrayerTimeModal = (props) => {
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [showVerse, setShowVerse] = useState(false);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setShowCloseButton(true);
    }, FIFTEENMINUTESTIMMER);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  const negativeClickHandler = () => {
    setShowVerse(true);
    //hide the modal automatically after some time
    setTimeout(() => {
      props.onHide();
    }, 5000);
  };

  const modalContent = `All activities are paused due to ${props.name} prayer time`;
  return (
    <Modal onHide={props.onHide}>
      <div className="message">
        <h3>{modalContent}</h3>
        {!showCloseButton && (
          <audio controls autoPlay>
            <source src={azzaanAudio} type="audio/mpeg" />
          </audio>
        )}
        <div>
          {showCloseButton && (
            <>
              {!showVerse && <p>Have you offered the prayer?</p>}
              <div className="prayer-actions">
                {!showVerse && <Button onClick={props.onHide}>Yes</Button>}
                {!showVerse && (
                  <Button
                    className="prayer-secondary"
                    onClick={negativeClickHandler}
                  >
                    No
                  </Button>
                )}

                {showVerse && (
                  <i>
                    "Worship at fixed times hath been enjoined on the believers"
                    <b> An-Nisa-103</b>
                  </i>
                )}
              </div>
            </>
          )}
        </div>
        {!showCloseButton && (
          <Countdown
            date={Date.now() + FIFTEENMINUTESTIMMER}
            className="counter"
          />
        )}
      </div>
    </Modal>
  );
};

export default PrayerTimeModal;
