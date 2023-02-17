import React, { useState, useEffect } from "react";

import PrayerTimeModal from "./PrayerTimeModal";

const PrayerTime = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const [showAzaanModal, setShowAzaanModal] = useState(false);
  const [dayChange, setDayChange] = useState(new Date());
  const [hourChange, sethourChange] = useState(new Date().getHours());
  const [azaanTimings, setAzaanTimings] = useState({});
  const [currentPrayerName, setCurrentPrayerName] = useState("");

  useEffect(() => {
    const getAzaanTimming = async () => {
      console.log("Again fetch the timings");

      try {
        const response = await fetch(
          "https://dailyprayer.abdulrcs.repl.co/api/islamabad"
        );

        if (!response.ok) throw new Error("Something went wrong");
        const data = await response.json();
        delete data.today.Sunrise; //delete the property from reponse which is not usefull
        setAzaanTimings(data.today);
      } catch (err) {
        setAzaanTimings({
          //fallback object if we doesn't got the reponse
          fajar: "05:45",
          zuhar: "13:30",
          asar: "16:45",
          mughrib: "17:59",
          ishaa: "19:45",
        });
        console.error(err);
      }
    };
    getAzaanTimming();

    // Testing purpose
    // setAzaanTimings({
    //   fajar: "05:45",
    //   zuhar: "13:30",
    //   asar: "16:09",
    //   mughrib: "19:03",
    //   ishaa: "20:10",
    // });
  }, [dayChange]);

  //Check For Day Change On Evert Hour Change

  useEffect(() => {
    if (dayChange.getDate() !== new Date().getDate()) {
      setDayChange(new Date());
    }

    const intervalId = setInterval(() => {
      sethourChange(new Date().getHours());
    }, 1000 * 60 * 60);
    return () => {
      clearInterval(intervalId);
    };
  }, [hourChange]);

  useEffect(() => {
    console.log(currentTime);

    for (const key in azaanTimings) {
      if (currentTime === azaanTimings[key]) {
        setCurrentPrayerName(key);
        setShowAzaanModal(true);
      }
    }

    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTime]);

  const onHideModal = () => {
    setShowAzaanModal(false);
  };
  return (
    <div>
      {showAzaanModal && (
        <PrayerTimeModal onHide={onHideModal} name={currentPrayerName} />
      )}
    </div>
  );
};

export default PrayerTime;
