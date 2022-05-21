import React from "react";
import "./Overlay.css";
import { useNavigate } from "react-router-dom";

const OverlayTeam = ({
  setSelectedGrid,
  setSelectedPlayers,
  setSelectedTheme,
  setTurn,
  p1score,
  p2score,
  p3score,
  p4score,
  setP1Score,
  setP2Score,
  setP3Score,
  setP4Score,
  selectedTheme,
  selectedGrid,
  selectedPlayers,
}) => {
  const navigate = useNavigate();

  const freshGameHandler = () => {
    setSelectedGrid("4*4");
    setSelectedPlayers(1);
    setSelectedTheme("Numbers");
    navigate("/");
  };

  const restarteGameHandler = () => {
    navigate("/started");
    setSelectedGrid(selectedGrid);
    setSelectedPlayers(selectedPlayers);
    setSelectedTheme(selectedTheme);
    setTurn(1);
    setP1Score(0);
    setP2Score(0);
    setP3Score(0);
    setP4Score(0);
  };

  const scoreBoard = [
    { player: 1, score: p1score },
    { player: 2, score: p2score },
    { player: 3, score: p3score },
    { player: 4, score: p4score },
  ];

  scoreBoard.splice(selectedPlayers);
  const finalScoreBoard = scoreBoard
    .sort((a, b) => a.score - b.score)
    .reverse();

  return (
    <>
      <div className="overlay_wrapper">
        <div className="overlay_box_team">
          <div className="overlay_header">
            <h1>
              {finalScoreBoard[0].score === finalScoreBoard[1].score
                ? "It's a Tie!"
                : `Player ${finalScoreBoard[0].player} Wins!`}
            </h1>
            <p>Game over ! Here are the results...</p>
          </div>
          <div className="overlay_body">
            <div className="overlay_result">
              {finalScoreBoard[0].score === finalScoreBoard[1].score ? (
                <>
                  {finalScoreBoard?.map((player, index) => (
                    <div
                      key={index}
                      className={
                        index === 0 || index === 1
                          ? "overlay_player_list winner"
                          : "overlay_player_list non_winners"
                      }
                    >
                      <p className={(index === 0 || index === 1) && "winner"}>
                        Player {player.player}{" "}
                        {(index === 0 || index === 1) && "(Winner!)"}
                      </p>
                      <p className={(index === 0 || index === 1) && "winner"}>
                        {player.score} Pairs
                      </p>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {finalScoreBoard?.map((player, index) => (
                    <div
                      key={index}
                      className={
                        index === 0
                          ? "overlay_player_list winner"
                          : "overlay_player_list non_winners"
                      }
                    >
                      <p className={index === 0 && "winner"}>
                        Player {player.player} {index === 0 && "(Winner)"}
                      </p>
                      <p className={index === 0 && "winner"}>
                        {player.score} Pairs
                      </p>
                    </div>
                  ))}
                </>
              )}
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
    </>
  );
};
export default OverlayTeam;
