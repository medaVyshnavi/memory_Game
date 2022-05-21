import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MemorySolo from "./component/Memory/MemorySolo";
import MemoryTeam from "./component/Memory/MemoryTeam";
import StartGame from "./component/StartGame/StartGame";
import OverlayTeam from "./component/Overlay/OverlayTeam";
import shuffleArray from "./component/Util/ShuffleArray";
import OverlaySolo from "./component/Overlay/OverlaySolo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { faBaseball } from "@fortawesome/free-solid-svg-icons";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import { faSnowman } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faToiletPaper } from "@fortawesome/free-solid-svg-icons";
import { faSquareVirus } from "@fortawesome/free-solid-svg-icons";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";

// const numberArrayLarge = [
//   1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
//   13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18,
// ];

const numberArraySmall = [
  { name: 1, value: 1 },
  { name: 1, value: 1 },
  { name: 2, value: 2 },
  { name: 2, value: 2 },
  { name: 3, value: 3 },
  { name: 3, value: 3 },
  { name: 4, value: 4 },
  { name: 4, value: 4 },
  { name: 5, value: 5 },
  { name: 5, value: 5 },
  { name: 6, value: 6 },
  { name: 6, value: 6 },
  { name: 7, value: 7 },
  { name: 7, value: 7 },
  { name: 8, value: 8 },
  { name: 8, value: 8 },
];

const numberArrayLarge = [
  { name: 1, value: 1 },
  { name: 1, value: 1 },
  { name: 2, value: 2 },
  { name: 2, value: 2 },
  { name: 3, value: 3 },
  { name: 3, value: 3 },
  { name: 4, value: 4 },
  { name: 4, value: 4 },
  { name: 5, value: 5 },
  { name: 5, value: 5 },
  { name: 6, value: 6 },
  { name: 6, value: 6 },
  { name: 7, value: 7 },
  { name: 7, value: 7 },
  { name: 8, value: 8 },
  { name: 8, value: 8 },
  { name: 9, value: 9 },
  { name: 9, value: 9 },
  { name: 10, value: 10 },
  { name: 10, value: 10 },
  { name: 11, value: 11 },
  { name: 11, value: 11 },
  { name: 12, value: 12 },
  { name: 12, value: 12 },
  { name: 13, value: 13 },
  { name: 13, value: 13 },
  { name: 14, value: 14 },
  { name: 14, value: 14 },
  { name: 15, value: 15 },
  { name: 15, value: 15 },
  { name: 16, value: 16 },
  { name: 16, value: 16 },
  { name: 17, value: 17 },
  { name: 17, value: 17 },
  { name: 18, value: 18 },
  { name: 18, value: 18 },
];

const imageArraySmall = [
  { name: "broom", value: <FontAwesomeIcon icon={faBroom} /> },
  { name: "broom", value: <FontAwesomeIcon icon={faBroom} /> },
  { name: "ball", value: <FontAwesomeIcon icon={faBaseball} /> },
  { name: "ball", value: <FontAwesomeIcon icon={faBaseball} /> },
  { name: "bug", value: <FontAwesomeIcon icon={faBug} /> },
  { name: "bug", value: <FontAwesomeIcon icon={faBug} /> },
  { name: "dragon", value: <FontAwesomeIcon icon={faDragon} /> },
  { name: "dragon", value: <FontAwesomeIcon icon={faDragon} /> },
  { name: "camera", value: <FontAwesomeIcon icon={faCamera} /> },
  { name: "camera", value: <FontAwesomeIcon icon={faCamera} /> },
  { name: "dove", value: <FontAwesomeIcon icon={faDove} /> },
  { name: "dove", value: <FontAwesomeIcon icon={faDove} /> },
  { name: "infinity", value: <FontAwesomeIcon icon={faInfinity} /> },
  { name: "infinity", value: <FontAwesomeIcon icon={faInfinity} /> },
  { name: "flask", value: <FontAwesomeIcon icon={faFlask} /> },
  { name: "flask", value: <FontAwesomeIcon icon={faFlask} /> },
];

const imageArrayLarge = [
  { name: "broom", value: <FontAwesomeIcon icon={faBroom} /> },
  { name: "broom", value: <FontAwesomeIcon icon={faBroom} /> },
  { name: "ball", value: <FontAwesomeIcon icon={faBaseball} /> },
  { name: "ball", value: <FontAwesomeIcon icon={faBaseball} /> },
  { name: "bug", value: <FontAwesomeIcon icon={faBug} /> },
  { name: "bug", value: <FontAwesomeIcon icon={faBug} /> },
  { name: "dragon", value: <FontAwesomeIcon icon={faDragon} /> },
  { name: "dragon", value: <FontAwesomeIcon icon={faDragon} /> },
  { name: "camera", value: <FontAwesomeIcon icon={faCamera} /> },
  { name: "camera", value: <FontAwesomeIcon icon={faCamera} /> },
  { name: "dove", value: <FontAwesomeIcon icon={faDove} /> },
  { name: "dove", value: <FontAwesomeIcon icon={faDove} /> },
  { name: "infinity", value: <FontAwesomeIcon icon={faInfinity} /> },
  { name: "infinity", value: <FontAwesomeIcon icon={faInfinity} /> },
  { name: "flask", value: <FontAwesomeIcon icon={faFlask} /> },
  { name: "flask", value: <FontAwesomeIcon icon={faFlask} /> },
  { name: "pizza", value: <FontAwesomeIcon icon={faPizzaSlice} /> },
  { name: "pizza", value: <FontAwesomeIcon icon={faPizzaSlice} /> },
  { name: "skull", value: <FontAwesomeIcon icon={faSkull} /> },
  { name: "skull", value: <FontAwesomeIcon icon={faSkull} /> },
  { name: "snowman", value: <FontAwesomeIcon icon={faSnowman} /> },
  { name: "snowman", value: <FontAwesomeIcon icon={faSnowman} /> },
  { name: "handshake", value: <FontAwesomeIcon icon={faHandshake} /> },
  { name: "handshake", value: <FontAwesomeIcon icon={faHandshake} /> },
  { name: "usersecret", value: <FontAwesomeIcon icon={faUserSecret} /> },
  { name: "usersecret", value: <FontAwesomeIcon icon={faUserSecret} /> },
  { name: "gamepad", value: <FontAwesomeIcon icon={faGamepad} /> },
  { name: "gamepad", value: <FontAwesomeIcon icon={faGamepad} /> },
  { name: "toiletPaper", value: <FontAwesomeIcon icon={faToiletPaper} /> },
  { name: "toiletPaper", value: <FontAwesomeIcon icon={faToiletPaper} /> },
  { name: "virus", value: <FontAwesomeIcon icon={faSquareVirus} /> },
  { name: "virus", value: <FontAwesomeIcon icon={faSquareVirus} /> },
  { name: "icons", value: <FontAwesomeIcon icon={faIcons} /> },
  { name: "icons", value: <FontAwesomeIcon icon={faIcons} /> },
  { name: "satelliteDish", value: <FontAwesomeIcon icon={faSatelliteDish} /> },
  { name: "satelliteDish", value: <FontAwesomeIcon icon={faSatelliteDish} /> },
];

function App() {
  const navigate = useNavigate();

  const [themes, setThemes] = useState(["Numbers", "Icons"]);
  const [selectedTheme, setSelectedTheme] = useState("Numbers");

  const [noOfPlayers, setNoOfPlayers] = useState([1, 2, 3, 4]);
  const [selectedPlayers, setSelectedPlayers] = useState(1);

  const [gridSize, setGridSize] = useState(["4*4", "6*6"]);
  const [selectedGrid, setSelectedGrid] = useState("4*4");

  const [turn, setTurn] = useState(1);

  const [p1score, setP1Score] = useState(0);
  const [p2score, setP2Score] = useState(0);
  const [p3score, setP3Score] = useState(0);
  const [p4score, setP4Score] = useState(0);

  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);

  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0);

  const [newArray, setNewArray] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const [selectedIndexArray, setSelectedIndexArray] = useState([]);
  const [matchedIndexArray, setMatchedIndexArray] = useState([]);

  //selected startgame options ie themes , no of ppl , grid size
  const clickedButtonHandler = (e) => {
    const option = e.target.textContent;
    if (option === "Numbers" || option === "Icons") {
      setSelectedTheme(option);
    }

    if (
      Number(option) === 1 ||
      Number(option) === 2 ||
      Number(option) === 3 ||
      Number(option) === 4
    ) {
      setSelectedPlayers(Number(option));
    }

    if (option === "4*4" || option === "6*6") {
      setSelectedGrid(option);
    }
  };

  // navigate to game page
  const startGameHandler = (e) => {
    if (selectedGrid === "4*4" && selectedTheme === "Numbers") {
      setNewArray(shuffleArray(numberArraySmall));
    } else if (selectedGrid === "4*4" && selectedTheme === "Icons") {
      setNewArray(shuffleArray(imageArraySmall));
    } else if (selectedGrid === "6*6" && selectedTheme === "Numbers") {
      setNewArray(shuffleArray(numberArrayLarge));
    } else {
      setNewArray(shuffleArray(imageArrayLarge));
    }
    setMoves(0);
    navigate("/started");
    setIsGameStarted(true);
    setP1Score(0);
    setP2Score(0);
    setP3Score(0);
    setP4Score(0);
    setTurn(1);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <StartGame
            clickedButtonHandler={clickedButtonHandler}
            startGameHandler={startGameHandler}
            themes={themes}
            selectedTheme={selectedTheme}
            noOfPlayers={noOfPlayers}
            selectedPlayers={selectedPlayers}
            gridSize={gridSize}
            selectedGrid={selectedGrid}
          />
        }
      />
      {selectedPlayers === 1 ? (
        <Route
          path="/started"
          element={
            <MemorySolo
              selectedTheme={selectedTheme}
              selectedPlayers={selectedPlayers}
              selectedGrid={selectedGrid}
              setSelectedPlayers={setSelectedPlayers}
              setSelectedGrid={setSelectedGrid}
              setSelectedTheme={setSelectedTheme}
              newArray={newArray}
              moves={moves}
              setMoves={setMoves}
              score={score}
              setScore={setScore}
              isGameStarted={isGameStarted}
              setIsGameStarted={setIsGameStarted}
              seconds={seconds}
              setSeconds={setSeconds}
              timer={timer}
              setTimer={setTimer}
              selectedIndexArray={selectedIndexArray}
              setSelectedIndexArray={setSelectedIndexArray}
              matchedIndexArray={matchedIndexArray}
              setMatchedIndexArray={setMatchedIndexArray}
            />
          }
        />
      ) : (
        <Route
          path="/started"
          element={
            <MemoryTeam
              selectedTheme={selectedTheme}
              selectedPlayers={selectedPlayers}
              selectedGrid={selectedGrid}
              setSelectedPlayers={setSelectedPlayers}
              setSelectedGrid={setSelectedGrid}
              setSelectedTheme={setSelectedTheme}
              newArray={newArray}
              setTimer={setTimer}
              setP1Score={setP1Score}
              setP2Score={setP2Score}
              setP3Score={setP3Score}
              setP4Score={setP4Score}
              p2score={p2score}
              p1score={p1score}
              p3score={p3score}
              p4score={p4score}
              turn={turn}
              setTurn={setTurn}
            />
          }
        />
      )}
      {selectedPlayers === 1 ? (
        <Route
          path="/result"
          element={
            <OverlaySolo
              setSeconds={setSeconds}
              seconds={seconds}
              setSelectedPlayers={setSelectedPlayers}
              setSelectedGrid={setSelectedGrid}
              setSelectedTheme={setSelectedTheme}
              setMoves={setMoves}
              moves={moves}
              timer={timer}
              setTimer={setTimer}
              isGameStarted={isGameStarted}
              setIsGameStarted={setIsGameStarted}
              selectedTheme={selectedTheme}
              selectedPlayers={selectedPlayers}
              selectedGrid={selectedGrid}
              selectedIndexArray={selectedIndexArray}
              setSelectedIndexArray={setSelectedIndexArray}
              matchedIndexArray={matchedIndexArray}
              setMatchedIndexArray={setMatchedIndexArray}
            />
          }
        />
      ) : (
        <Route
          path="/result"
          element={
            <OverlayTeam
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
              setSelectedGrid={setSelectedGrid}
              setSelectedTheme={setSelectedTheme}
              selectedTheme={selectedTheme}
              selectedGrid={selectedGrid}
              p2score={p2score}
              p1score={p1score}
              p3score={p3score}
              p4score={p4score}
              setP1Score={setP1Score}
              setP2Score={setP2Score}
              setP3Score={setP3Score}
              setP4Score={setP4Score}
              setTurn={setTurn}
            />
          }
        />
      )}
    </Routes>
  );
}

export default App;
