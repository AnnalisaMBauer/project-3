//layout of snake playing field
const CANVAS_SIZE = [500, 500];
//where snake starts
const SNAKE_START = [
  [8, 7],
  [8, 8],
];
//where snake is compared to apple
const APPLE_START = [9, 3];
//snake size
const SCALE = 32;

const SPEED = 100;
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0], // right
};

export { CANVAS_SIZE, SNAKE_START, APPLE_START, SCALE, SPEED, DIRECTIONS };
