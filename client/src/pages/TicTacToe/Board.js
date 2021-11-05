import React from "react";
import Square from "./Square";

const style = {
  // border: "4px solid darkblue",
  // borderRadius: "10px",
  width: "350px",
  height: "350px",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3,1fr)",
  padding: '2em',
  borderRadius: '30px',
};

const Board = ({ squares, onClick }) => (
  <div className="bg-dark" style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
