import React, { useState } from "react";
import { calculateWinner } from "../../utils/ticHelper";
import Board from "./Board";

const container = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  margin: "3em 0 8em 0",
};
const styles = {
  width: "200px",
  // margin: "20px auto",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, SetXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    SetXisNext(!xIsNext);
  };

  const renderMoves = () => {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))}>restart</button>
    );
  };

  return (
    <div style={container}>
      {" "}
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </div>
  );
};

export default Game;
