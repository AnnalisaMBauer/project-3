import { useState } from "react";

const RockPaperScissors = () => {
  const choices = ["rock", "paper", "scissors"];
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [scores, setScores] = useState({
    wins: 0,
    losses: 0,
    ties: 0,
  });

  const handleClick = (value) => {
    const computerVal = generateComputerChoice();

    if (
      (computerVal === "rock" && value === "paper") ||
      (computerVal === "paper" && value === "scissors") ||
      (computerVal === "scissors" && value === "rock")
    ) {
      setScores({
        ...scores,
        wins: scores.wins + 1,
      });
      setResult("Won!")
    } else if (computerVal === value) {
      setScores({
        ...scores,
        ties: scores.ties + 1,
      });
      setResult("Tied!")
    } else {
      setScores({
        ...scores,
        losses: scores.losses + 1,
      });
      setResult("Lost!")
    }
    setUserChoice(value);
    setComputerChoice(computerVal);
  };

  const generateComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  return (
    <div className="d-flex col-12 justify-content-center align-items-center mt-5">
      <div className="p-5">
        <div>
          <p>Wins: {scores.wins}</p>
          <p>Losses: {scores.losses}</p>
          <p>Ties: {scores.ties}</p>
        </div>
        <div className="">
          <h1>user choice is: {userChoice}</h1>
          <h1>computer choice is: {computerChoice}</h1>
        </div>
        <div className="">
          {choices.map((choice, index) => (
            <button
              className="m-2"
              key={index}
              onClick={() => handleClick(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
        <h1>{result}</h1>
      </div>
    </div>
  );
};

export default RockPaperScissors;
