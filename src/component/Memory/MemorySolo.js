import React, { useEffect, useState } from "react";
import "./Memory.css";
import Header from "../Header/Header";
import FooterSolo from "../Footer/FooterSolo";
import { useNavigate } from "react-router-dom";

const MemorySolo = ({
  selectedPlayers,
  selectedGrid,
  selectedTheme,
  setSelectedGrid,
  setSelectedPlayers,
  setSelectedTheme,
  newArray,
  moves,
  setMoves,
  score,
  setScore,
  isGameStarted,
  setIsGameStarted,
  seconds,
  setSeconds,
  timer,
  setTimer,
  selectedIndexArray,
  setSelectedIndexArray,
  matchedIndexArray,
  setMatchedIndexArray

}) => {

  const navigate = useNavigate();

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
      navigate("/result");
      setIsGameStarted(false);
    }
  }, [matchedIndexArray]);

  useEffect(() => {
    const outerTimer = setTimeout(() => {
      if (selectedIndexArray.length === 2) {
        setMoves((prevState) => prevState + 1);
        if (
          newArray[selectedIndexArray[0]].name !== newArray[selectedIndexArray[1]].name
        ) {
          setSelectedIndexArray([]);
        } else {
          setScore((prevState) => prevState + 1);
          setMatchedIndexArray([
            ...matchedIndexArray,
            selectedIndexArray[0],
            selectedIndexArray[1],
          ]);
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
        setSeconds={setSeconds}
        selectedGrid={selectedGrid}
        selectedTheme={selectedTheme}
        setSelectedPlayers={setSelectedPlayers}
        setSelectedGrid={setSelectedGrid}
        setSelectedTheme={setSelectedTheme}
        setMoves={setMoves}
        selectedPlayers={selectedPlayers}
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
      <FooterSolo
        seconds={seconds}
        setSeconds={setSeconds}
        isGameStarted={isGameStarted}
        score={score}
        moves={moves}
        selectedPlayers={selectedPlayers}
        timer={timer}
        setTimer={setTimer}
      />
    </>
  );
};

export default MemorySolo;
