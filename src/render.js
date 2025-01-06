import { Player } from "./player";
import { gridState } from "./grid";
import { NUMBER_OF_SQUARES, PLAYER_COLOR, WINDOW_SIZE, SQUARE_SIZE, WINDOW_WIDTH } from "./constants";
import { CAMERA_MODE, CAMERA_MODES } from "./constants";
import { getSquareColor, checkOutOfBounds } from "./helpers";

const canvas = document.getElementById('canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

let windowStartPosition = {
  x: 0,
  y: 0,
}

const clearWindow = () => {
  ctx.reset();
}

const updateRenderWindow = () => {
  const newPosition = {
    x: Player.position.x + (SQUARE_SIZE / 2) - (WINDOW_WIDTH / 2),
    y: Player.position.y + (SQUARE_SIZE / 2) - (WINDOW_WIDTH / 2)
  };
  windowStartPosition.x = checkOutOfBounds(newPosition.x) ? windowStartPosition.x : newPosition.x;
  windowStartPosition.y = checkOutOfBounds(newPosition.y) ? windowStartPosition.y : newPosition.y;
}

const redrawStillCamera = () => {
  for (let y = 0; y < NUMBER_OF_SQUARES; y++) {
    for (let x = 0; x < NUMBER_OF_SQUARES; x++) {
      ctx.fillStyle = getSquareColor(gridState[y][x]);
      ctx.fillRect(x * SQUARE_SIZE, y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
    }
  }
  ctx.fillStyle = PLAYER_COLOR;
  ctx.fillRect(Player.position.x, Player.position.y, NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
}


const redrawMovingCamera = () => {
  ctx.beginPath();
  ctx.rect(windowStartPosition.x, windowStartPosition.y, WINDOW_WIDTH, WINDOW_WIDTH);
  ctx.clip();
  redrawStillCamera();
}

const redrawGridMovingCamera = () => {
  for (let y = 0; y < WINDOW_SIZE; y++) {
    for (let x = 0; x < WINDOW_SIZE; x++) {
      const gridIndex = {
        x: windowStartPosition.x + x,
        y: windowStartPosition.y + y
      }
      if (Player.position.x === gridIndex.x && Player.position.y === gridIndex.y) {
        ctx.fillStyle = PLAYER_COLOR;
      } else {
        ctx.fillStyle = getSquareColor(gridState[gridIndex.y][gridIndex.x]);
      }
      ctx.fillRect(gridIndex.x * NUMBER_OF_SQUARES, gridIndex.y * NUMBER_OF_SQUARES, NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
    }
  }
}

const redraw = () => {
  switch (CAMERA_MODE) {
    case CAMERA_MODES.movingWindow:
      redrawMovingCamera();
      break;
    case CAMERA_MODES.gridMovingWindow:
      redrawGridMovingCamera();
      break;
    default:
      redrawStillCamera();
  }
}

const update = () => {
  Player.updatePosition();
}

const render = () => {
  clearWindow();
  redraw();
}

export { render, updateRenderWindow, update };
