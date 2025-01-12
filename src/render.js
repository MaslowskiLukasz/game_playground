import { Player } from "./player";
import { gridState } from "./grid";
import { NUMBER_OF_SQUARES, PLAYER_COLOR, WINDOW_SIZE, SQUARE_SIZE, WINDOW_WIDTH, ENEMY_COLOR } from "./constants";
import { CAMERA_MODE, CAMERA_MODES } from "./constants";
import { getSquareColor, checkOutOfBounds } from "./helpers";
import { sprites } from "./sprites";
import { Enemy, findPath } from "./enemy";

const canvas = document.getElementById('canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

let windowStartPosition = {
  x: 0,
  y: 0,
}

const clearWindow = () => {
  // ctx.reset();
}

const updateRenderWindow = () => {
  const newPosition = {
    x: Player.position.x + (SQUARE_SIZE / 2) - (WINDOW_WIDTH / 2),
    y: Player.position.y + (SQUARE_SIZE / 2) - (WINDOW_WIDTH / 2)
  };
  windowStartPosition.x = checkOutOfBounds(newPosition.x) ? windowStartPosition.x : newPosition.x;
  windowStartPosition.y = checkOutOfBounds(newPosition.y) ? windowStartPosition.y : newPosition.y;
}

const redrawMap = () => {
  for (let y = 0; y < NUMBER_OF_SQUARES; y++) {
    for (let x = 0; x < NUMBER_OF_SQUARES; x++) {
      ctx.strokeStyle = getSquareColor(gridState[y][x]);
      ctx.strokeRect(x * SQUARE_SIZE, y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
    }
  }
  // ctx.fillStyle = PLAYER_COLOR;
  // ctx.fillRect(Player.position.x, Player.position.y, NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
  ctx.fillStyle = ENEMY_COLOR;
  ctx.fillRect(Enemy.position.x * SQUARE_SIZE, Enemy.position.y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
  // ctx.drawImage(sprites.frog, Player.position.x * SQUARE_SIZE, Player.position.y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
  ctx.fillStyle = PLAYER_COLOR;
  ctx.fillRect(Player.position.x * SQUARE_SIZE, Player.position.y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
}


const redrawMovingCamera = () => {
  ctx.beginPath();
  ctx.rect(windowStartPosition.x, windowStartPosition.y, WINDOW_WIDTH, WINDOW_WIDTH);
  ctx.clip();
  redrawMap();
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
      ctx.fillRect(gridIndex.x * SQUARE_SIZE, gridIndex.y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
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
      redrawMap();
  }
}

const update = () => {
  Player.updatePosition();
}

const render = () => {
  clearWindow();
  redraw();
}

export { render, updateRenderWindow, update, ctx };
