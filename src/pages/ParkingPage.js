import React, { useState, useEffect } from "react";

const ParkingPage = () => {
  // Set your target date and time
  const targetDate = new Date("2024-06-01T23:59:59");

  // State to store the remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update the countdown
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="marshall-container">
      <div className="marshall-col-5 marshall-col-screen marshall-screen-left">
        <div
          id="marshall-animate-area"
          data-hide="mrs-scaleDown"
          className="marshall-single-fit-thumb marshall-animate-content marshall-animate-content mrs-active marshall-fit-column"
          style={{ backgroundImage: "url('images/v6/viadrina-hg.jpg')" }}
        ></div>
      </div>
      <div className="marshall-col-7 marshall-col-content">
        <div className="marshall-logo fadeIn fast">
          <img src="images/logo-yellow.png" alt="MuSA Logo" />
        </div>
        <div className="marshall-content css-center">
          <h2 className="single_large_title big_title fadeIn fast">
            Launch In
          </h2>
          <h2
            className="single_large_title fadeIn medium"
            id="countdown_text_layout"
          >
            {`${timeLeft.days} days ${timeLeft.hours} hrs ${timeLeft.minutes} mins ${timeLeft.seconds} secs`}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ParkingPage;
