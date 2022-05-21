import React from "react";
import "./StartGame.css";

const StartGame = ({
  clickedButtonHandler,
  startGameHandler,
  themes,
  noOfPlayers,
  gridSize,
  selectedGrid,
  selectedTheme,
  selectedPlayers

}) => {
  return (
    <div className="startGame_wrapper">
       <div className="startGame_logo"></div>
      <div className="startGame_box">
        <div className="startGame_theme division">
          <p>Select Theme</p>
          <div className="theme_option option">
            {themes.map((theme) => (
              <button key={theme} className={selectedTheme === theme ? "selected_option" : ""} onClick={clickedButtonHandler}>
                {theme}
              </button>
            ))}
          </div>
        </div>
        <div className="startGame_players division">
          <p>Number of Players</p>
          <div className="players_option option">
            {noOfPlayers.map((playerNo) => (
              <button key={playerNo} className={selectedPlayers === playerNo ? "selected_option" : ""} onClick={clickedButtonHandler}>
                {playerNo}
              </button>
            ))}
          </div>
        </div>
        <div className="startGame_gridSize division">
          <p>Grid Size</p>
          <div className="grid_option option">
            {gridSize.map((grid) => (
              <button key={grid} className={selectedGrid === grid ? "selected_option" : ""} onClick={clickedButtonHandler}>
                {grid}
              </button>
            ))}
          </div>
        </div>
        <button onClick={startGameHandler} className="startgame_button">
          {" "}
          Start Game
        </button>
      </div>
    </div>
  );
};

export default StartGame;
