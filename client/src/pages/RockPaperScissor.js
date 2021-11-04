import { useState } from "react";
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';
import Tada from 'react-reveal/Tada';
import Jumbotron from "./RpsJumbotron";

const RockPaperScissors = () => {
  const [showDiv, setShowDiv] = useState(true);
  const clickDiv = () => setShowDiv(false)
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
    width: '150px',
    height: '150px',
    boxShadow: '4px 4px 10px 1px black',
  };

  // TODO add username of logged in user to h1 'User choice' element
  return (
    <div onClick={clickDiv} class="container mb-5 z-index-1">
      {showDiv ? <Jumbotron /> : null }
 
    <div className="d-flex justify-content-center">
      
      <div className="p-1">
        <div className="row p-1 justify-content-center">
          <h1 className="display-5 pt-0">Wins: {scores.wins}</h1>
          <h1 className="display-5 pt-0 pl-5">Losses: {scores.losses}</h1>
          <h1 className="display-5 pt-0 pl-5">Ties: {scores.ties}</h1>
        </div>
        <div className="text-center">
          <h1>User's choice is: {userChoice}</h1>
          <h1>Computer's choice is: {computerChoice}</h1>
        </div>
        <div className="row">
          <Zoom>
            <Tada spy={handleClick}>
          {choices.map((choice, index) => (
            <button style={Style}
              className=" m-2 btn btn-dark rounded-circle"
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
        <h1 className="display-1 text-center mb-5">{result}</h1>
        </Flash>
      </div>
    </div>
    </div>
  );
};

export default RockPaperScissors;
