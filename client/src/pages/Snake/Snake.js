import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./Hook";
import Jumbotron from "./JumboSnake";
import Zoom from "react-reveal/Zoom";

import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
} from "./Layout";

const Snake = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [showDiv, setShowDiv] = useState(true);
  const clickDiv = () => setShowDiv(false);
  const [score, setScore] = useState({
    apples: 0,
  });

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
    setScore({
      apples: (score.apples = 0),
    });
  };

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createApple = () =>
    apple.map((_, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;
    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      setScore({
        apples: score.apples + 1,
      });
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  useEffect(() => {
    //canvas
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
    //snake
    context.fillStyle = "lime";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    //apple
    context.fillStyle = "red";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  useInterval(() => gameLoop(), speed);
  const ContStyle = {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    height: '100%',
  };

  const GameStyle = {
    gridArea: "1 / 1",
    zIndex: "1",
    marginLeft: "auto",
    marginRight: "auto",
  };
  return (
    <div onClick={clickDiv} class="container mb-5 p-1" style={ContStyle}>
      {showDiv ? <Jumbotron /> : null}
      <Zoom>
        <div style={GameStyle}>
    <div className="bg-dark p-3"
      style={{
        display: "flex",
        margin: "1em 0",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: 'Orbitron',
        color: 'white',
        borderRadius: '30px',
      }}
      role="button"
      tabIndex="0"
      onKeyDown={(e) => moveSnake(e)}
    >
      {" "}
      <h1 className="display-5 pt-0">Score: {score.apples}</h1>
      <canvas
        style={{
          border: "4px solid black",
          backgroundColor: "rgba(250, 250, 250, 0.6)",
        }}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      {gameOver && (
        <div style={{ fontSize: "2.5em", fontWeight: "600" }}>GAME OVER</div>
      )}
      <button className="mt-3" onClick={startGame}>Start Game</button>
    </div>
    </div>
    </Zoom>
    </div>
  );
};
export default Snake;
