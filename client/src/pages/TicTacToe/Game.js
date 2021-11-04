import React, { useState } from "react";
import { calculateWinner } from "../../utils/ticHelper";
import Board from "./Board";
import Jumbotron from "./JumboTicTac";
import Zoom from "react-reveal/Zoom";
import Jello from "react-reveal/Jello";

const container = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  margin: "3em 0 1em 0",
  fontFamily: 'Orbitron',
};

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  width: "200px",
  textAlign: "center",
  fontFamily: 'Orbitron',
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, SetXisNext] = useState(true);
  const winner = calculateWinner(board);
  const [showDiv, setShowDiv] = useState(true);
  const clickDiv = () => setShowDiv(false);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "❌" : "⭕";
    setBoard(boardCopy);
    SetXisNext(!xIsNext);
  };

  const renderMoves = () => {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))}>restart</button>
    );
  };

  const ContStyle = {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    marginTop: "20vh",
  };

  const GameStyle = {
    gridArea: "1 / 1",
    zIndex: "1",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <div onClick={clickDiv} class="container mb-5" style={ContStyle}>
      {showDiv ? <Jumbotron /> : null}
      <div style={GameStyle}>
        <Zoom>
          <h3 style={styles}>
            {winner
              ? "Winner: " + winner
              : "Next Player: " + (xIsNext ? "❌" : "⭕")}
          </h3>
          <div style={container}>
            {" "}
            <Board squares={board} onClick={handleClick} />
          </div>
          <div style={styles}>{renderMoves()}</div>
        </Zoom>
      </div>
    </div>
  );
};

export default Game;
