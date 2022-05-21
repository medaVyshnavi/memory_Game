import React, { useEffect } from "react";
import "./Overlay.css";
import { useNavigate } from "react-router-dom";

const OverlaySolo = ({
  moves,
  setMoves,
  setSeconds,
  setIsGameStarted,
  timer,
  setSelectedGrid,
  setSelectedPlayers,
  setSelectedTheme,
  selectedGrid,
  selectedPlayers,
  selectedTheme,
  setMatchedIndexArray,
  setSelectedIndexArray
}) => {
  const navigate = useNavigate();

  const freshGameHandler = () => {
    
    setTimeout(() => {
      setSelectedGrid("4*4");
      setSelectedPlayers(1);
      setSelectedTheme("Numbers");
      setMoves(0);
      setSeconds(0);
    }, 1000);
    navigate("/");
  };

  const restarteGameHandler = () => {
    setSeconds(0);
    setIsGameStarted(true);
    setMoves(0);
    setSelectedGrid(selectedGrid);
    setSelectedPlayers(selectedPlayers);
    setSelectedTheme(selectedTheme);
    setMatchedIndexArray([]);
    setSelectedIndexArray([]);
    navigate("/started");
  };

  return (
    <div className="overlay_wrapper">
      <div className="overlay_box_solo">
        <div className="overlay_header">
          <h1>You did it!</h1>
          <p>Game over ! Here's how you got on...</p>
        </div>
        <div className="overlay_body">
          <div className="overlay_result_time">
            <p>Time Elapsed</p>
            <h2>{timer}</h2>
          </div>
          <div className="overlay_result_moves">
            <p>Moves Taken</p>
            <h2>{moves} Moves</h2>
          </div>
          <div className="overlay_result_buttons">
            <button onClick={restarteGameHandler} id="overlay_restart">
              Restart
            </button>
            <button onClick={freshGameHandler}>Setup New Game</button>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};
export default OverlaySolo;
