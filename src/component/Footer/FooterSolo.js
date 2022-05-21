import React, { useEffect } from "react";
import "./Footer.css";

const FooterSolo = ({
  seconds,
  setSeconds,
  moves,
  isGameStarted,
  timer,
  setTimer
}) => {

  useEffect(() => {
    let time = null;
    if (isGameStarted) {
      time = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(time);
  }, [seconds]);

  useEffect(() => {
    let minutes = Math.floor(seconds / 60);
    let sec = seconds - minutes * 60;
    if (sec < 10) {
      sec = `0${sec}`;
    } else {
      sec = sec;
    }
    setTimer(minutes + ":" + sec);
  }, [seconds]);

  return (
    <div className="footer_wrapper">
        <div className="solo">
          <div className="timer">
            <p>Time</p>
            <p id="footer_bold">{timer}</p>
          </div>
          <div className="moves">
            <p>Moves</p>
            <p id="footer_bold">{moves}</p>
          </div>
        </div>
    </div>
  );
};

export default FooterSolo;
