import { useState } from "react";
import Zoom from "react-reveal/Zoom";
import Flash from "react-reveal/Flash";
import Jello from "react-reveal/Jello";
import Swing from "react-reveal/Swing";
import Jumbotron from "./RpsJumbotron";

const RockPaperScissors = () => {
  const [showDiv, setShowDiv] = useState(true);
  const clickDiv = () => setShowDiv(false);
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
      setResult("You Won!");
    } else if (computerVal === value) {
      setScores({
        ...scores,
        ties: scores.ties + 1,
      });
      setResult("You Tied!");
    } else {
      setScores({
        ...scores,
        losses: scores.losses + 1,
      });
      setResult("You Lost!");
    }
    setUserChoice(value);
    setComputerChoice(computerVal);
  };

  const generateComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const Style = {
    fontSize: "5rem",
    width: "150px",
    height: "150px",
    boxShadow: "4px 4px 10px 1px black",
  };

  const ContStyle = {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    marginTop: "20vh",
  };

  const GameStyle = {
    gridArea: "1 / 1",
  };

  // TODO add username of logged in user to h1 'User choice' element
  return (
    <div onClick={clickDiv} class="container mb-5" style={ContStyle}>
      {showDiv ? <Jumbotron /> : null}

      <div className="d-flex justify-content-center" style={GameStyle}>
        <div className="p-1">
          <Zoom>
            <div className="row p-1 justify-content-center">
              <h1 className="display-5 pt-0">Wins: {scores.wins}</h1>
              <h1 className="display-5 pt-0 pl-5">Losses: {scores.losses}</h1>
              <h1 className="display-5 pt-0 pl-5">Ties: {scores.ties}</h1>
            </div>
            <div className="text-center">
              <h1>
                User's choice is: <Swing spy={handleClick}>{userChoice}</Swing>
              </h1>
              <h1>
                Computer's choice is:{" "}
                <Swing spy={handleClick}>{computerChoice}</Swing>
              </h1>
            </div>
            <div className="row">
              {choices.map((choice, index) => (
                <Jello spy={handleClick}>
                  <button
                    style={Style}
                    className=" m-2 btn btn-dark rounded-circle"
                    key={index}
                    onClick={() => handleClick(choice)}
                  >
                    {choice}
                  </button>
                </Jello>
              ))}
            </div>
          </Zoom>
          <Flash spy={result}>
            <h1 className="display-1 text-center mb-5">{result}</h1>
          </Flash>
        </div>
      </div>
    </div>
  );
};

export default RockPaperScissors;
