import React, { useEffect, useState } from "react";
import "./Memory.css";
import Header from "../Header/Header";
import FooterTeam from "../Footer/FooterTeam";
import { useNavigate } from "react-router-dom";

const MemoryTeam = ({
  turn,
  setTurn,
  setP1Score,
  setP2Score,
  setP3Score,
  setP4Score,
  p1score,
  p2score,
  p3score,
  p4score,
  setSelectedGrid,
  setSelectedPlayers,
  setSelectedTheme,
  newArray,
  selectedGrid,
  selectedTheme,
  selectedPlayers,
}) => {
  const navigate = useNavigate();

  const [selectedIndexArray, setSelectedIndexArray] = useState([]);
  const [matchedIndexArray, setMatchedIndexArray] = useState([]);

  const handleClick = (e, index) => {
    e.preventDefault();
    if (selectedIndexArray.length === 2) {
      console.log("length 2");
    } else if (selectedIndexArray.length > 1) {
      setSelectedIndexArray([]);
    } else {
      setSelectedIndexArray([...selectedIndexArray, index]);
    }
  };

  useEffect(() => {
    if (matchedIndexArray.length === newArray.length) {
      // setIsGameStarted(false);
      navigate("/result");
    }
  }, [matchedIndexArray]);

  useEffect(() => {
    const outerTimer = setTimeout(() => {
      if (selectedIndexArray.length === 2) {
        if (
          newArray[selectedIndexArray[0]].name !==
          newArray[selectedIndexArray[1]].name
        ) {
          setSelectedIndexArray([]);
          if (turn === selectedPlayers) {
            setTurn(1);
          } else {
            setTurn((prevState) => prevState + 1);
          }
        } else {
          setMatchedIndexArray([
            ...matchedIndexArray,
            selectedIndexArray[0],
            selectedIndexArray[1],
          ]);
          if (turn === 1) {
            setP1Score((prevState) => prevState + 1);
          } else if (turn === 2) {
            setP2Score((prevState) => prevState + 1);
          } else if (turn === 3) {
            setP3Score((prevState) => prevState + 1);
          } else if (turn === 4) {
            setP4Score((prevState) => prevState + 1);
          } else {
            console.log("no conditon");
          }
          if (turn === selectedPlayers) {
            setTurn(1);
          } else {
            setTurn((prevState) => prevState + 1);
          }
        }
        const innerTimer = setTimeout(() => {
          setSelectedIndexArray([]);
        }, 200);
        return () => clearTimeout(innerTimer);
      }
    }, 600);
    return () => clearTimeout(outerTimer);
  }, [selectedIndexArray]);

  return (
    <>
      <Header
        setSelectedPlayers={setSelectedPlayers}
        setSelectedGrid={setSelectedGrid}
        setSelectedTheme={setSelectedTheme}
        setTurn={setTurn}
        setP1Score={setP1Score}
        setP2Score={setP2Score}
        setP3Score={setP3Score}
        setP4Score={setP4Score}
        selectedGrid={selectedGrid}
        selectedPlayers={selectedPlayers}
        selectedTheme={selectedTheme}
        setMatchedIndexArray={setMatchedIndexArray}
        setSelectedIndexArray={setSelectedIndexArray}
      />
      <div
        className={
          selectedGrid === "4*4"
            ? "memory_wrapper memory_wrapper_small"
            : "memory_wrapper memory_wrapper_large"
        }
      >
        {newArray.length > 0 &&
          newArray.map((arr, index) => (
            <div
              key={index}
              onClick={(e) => handleClick(e, index)}
              className={
                selectedGrid === "4*4"
                  ? "numberDiv numberDiv_small"
                  : "numberDiv numberDiv_large"
              }
            >
              <p className="memory_card_front"></p>
              {matchedIndexArray.includes(index, 0) ? (
                <p
                  className={
                    selectedGrid === "4*4"
                      ? "memory_card_back memory_card_back_small matchedCard"
                      : "memory_card_back memory_card_back_large matchedCard"
                  }
                >
                  {arr.value}
                </p>
              ) : (
                <p
                  className={
                    selectedIndexArray[0] === index ||
                    selectedIndexArray[1] === index
                      ? selectedGrid === "4*4"
                        ? "memory_card_back memory_card_back_small selectedCard"
                        : "memory_card_back memory_card_back_large selectedCard"
                      : selectedGrid === "4*4"
                      ? "memory_card_back memory_card_back_small"
                      : "memory_card_back memory_card_back_large"
                  }
                >
                  {" "}
                  {arr.value}{" "}
                </p>
              )}
            </div>
          ))}
      </div>

      <FooterTeam
        selectedPlayers={selectedPlayers}
        p2score={p2score}
        p1score={p1score}
        p3score={p3score}
        p4score={p4score}
        turn={turn}
      />
    </>
  );
};

export default MemoryTeam;
