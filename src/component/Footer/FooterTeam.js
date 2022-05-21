import React from "react";
import "./Footer.css";

const FooterTeam = ({
  selectedPlayers,
  p1score,
  p2score,
  p3score,
  p4score,
  turn,
}) => {
  return (
    <div className="footer_wrapper">
      <div className="team">
        <div
          className={
            turn === 1 ? "players player_turn" : "players unselected_player"
          }
        >
          <p>Player 1</p>
          <p className="noOfPairs">{p1score}</p>
        </div>
        <div
          className={
            turn === 2 ? "players player_turn" : "players unselected_player"
          }
        >
          <p>Player 2</p>
          <p className="noOfPairs">{p2score}</p>
        </div>
        {selectedPlayers === 3 && (
          <div
            className={
              turn === 3 ? "players player_turn" : "players unselected_player"
            }
          >
            <p>Player 3</p>
            <p className="noOfPairs">{p3score}</p>
          </div>
        )}
        {selectedPlayers === 4 && (
          <>
            <div
              className={
                turn === 3 ? "players player_turn" : "players unselected_player"
              }
            >
              <p>Player 3</p>
              <p className="noOfPairs">{p3score}</p>
            </div>
            <div
              className={
                turn === 4 ? "players player_turn" : "players unselected_player"
              }
            >
              <p>Player 4</p>
              <p className="noOfPairs">{p4score}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FooterTeam;
