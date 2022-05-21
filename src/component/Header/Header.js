import React, { useState, useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({
  setSeconds,
  setTurn,
  setSelectedGrid,
  setSelectedPlayers,
  setSelectedTheme,
  setMoves,
  selectedPlayers,
  setP1Score,
  setP2Score,
  setP3Score,
  setP4Score,
  selectedGrid,
  selectedTheme,
  setMatchedIndexArray,
  setSelectedIndexArray,
}) => {
  const navigate = useNavigate();

  const newGameHandler = () => {
    if (selectedPlayers === 1) {
      setSeconds(0);
    } else {
      setSelectedGrid("4*4");
      setSelectedPlayers(1);
      setSelectedTheme("Numbers");
    }
    navigate("/");
  };

  const restarteGameHandler = () => {
    setMatchedIndexArray([]);
    setSelectedIndexArray([]);
    setSelectedGrid(selectedGrid);
    setSelectedPlayers(selectedPlayers);
    setSelectedTheme(selectedTheme);
    if (selectedPlayers === 1) {
      setSeconds(0);
      setMoves(0);
    } else {
      setTurn(1);
      setP2Score(0);
      setP3Score(0);
      setP4Score(0);
      setP1Score(0);
    }
    navigate("/started");
  };

  return (
    <div className="header_wrapper">
      <div className="header_logo"></div>
      <div className="header_buttons">
        <button onClick={restarteGameHandler} className="restart">
          Restart
        </button>
        <button onClick={newGameHandler} className="new_game">
          New Game
        </button>
      </div>
    </div>
  );
};

export default Header;
