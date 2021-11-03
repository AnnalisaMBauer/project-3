import { useState } from "react";
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';
import Tada from 'react-reveal/Tada';

const RockPaperScissors = () => {
  const choices = ["🤘", "🧻", "✂️"];
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
      (computerVal === "🤘" && value === "🧻") ||
      (computerVal === "🧻" && value === "✂️") ||
      (computerVal === "✂️" && value === "🤘")
    ) {
      setScores({
        ...scores,
        wins: scores.wins + 1,
      });
      setResult("You Won!")
    } else if (computerVal === value) {
      setScores({
        ...scores,
        ties: scores.ties + 1,
      });
      setResult("You Tied!")
    } else {
      setScores({
        ...scores,
        losses: scores.losses + 1,
      });
      setResult("You Lost!")
    }
    setUserChoice(value);
    setComputerChoice(computerVal);
  };

  const generateComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const Style = {
    fontSize: '5rem',
    width: '200px',
    height: '200px',
    boxShadow: '4px 4px 10px 1px black',
  };

  // TODO add username of logged in user to h1 'User choice' element
  return (
    <div class="container">
    <div class="jumbotron jumbotron-fluid p-3 mt-5 rounded">
    <h1 class="display-4"><em>Rock Paper Scissors</em></h1>
    <p class="lead">This is a simultaneous, zero-sum game, and it has only two possible outcomes:<br></br> 
    a draw, or a win for one player and a loss for the other.<br></br> 
    "rock crushes scissors" | "paper covers rock" | "scissors cuts paper".<br></br> 
   If the game is a draw, it is repeated until a winner is declared.</p>
  </div>

    <div className="d-flex col-12 justify-content-center align-items-center mt-5">
      
      <div className="p-1">
        <div className="row p-1 justify-content-center">
          <h1 className="display-5 p-3">Wins: {scores.wins}</h1>
          <h1 className="display-5 p-3">Losses: {scores.losses}</h1>
          <h1 className="display-5 p-3">Ties: {scores.ties}</h1>
        </div>
        <div className="text-center">
          <h1>User's choice is: {userChoice}</h1>
          <h1>Computer's choice is: {computerChoice}</h1>
        </div>
        <div className="p-5">
          <Zoom>
            <Tada spy={handleClick}>
          {choices.map((choice, index) => (
            <button style={Style}
              className="m-2 btn btn-dark rounded-circle"
              key={index}
              onClick={() => handleClick(choice)}
            >
              {choice}
            </button>
          ))}
          </Tada>
          </Zoom>
        </div>
        <Flash spy={result}>
        <h1 className="display-1 text-center">{result}</h1>
        </Flash>
      </div>
    </div>
    </div>
  );
};

export default RockPaperScissors;
