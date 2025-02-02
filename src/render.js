import { Player } from "./player";
import { Attack } from "./attack";
import { gridState } from "./grid";
import { NUMBER_OF_SQUARES, PLAYER_COLOR, WINDOW_SIZE, SQUARE_SIZE, WINDOW_WIDTH } from "./constants";
import { CAMERA_MODE, CAMERA_MODES } from "./constants";
import { getSquareColor, checkOutOfBounds } from "./helpers";
import { enemy } from "./enemy";
import { Position } from "./types";

const canvas = document.getElementById('canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

/** @type {Position} */
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

const redrawMap = () => {
  for (let y = 0; y < NUMBER_OF_SQUARES; y++) {
    for (let x = 0; x < NUMBER_OF_SQUARES; x++) {
      ctx.fillStyle = getSquareColor(gridState[y][x]);
      ctx.fillRect(x * SQUARE_SIZE, y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
    }
  }
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

const updateEnemiesPosition = () => {
  enemy.updatePosition();
}

const render = () => {
  clearWindow();
  redraw();
  enemy.draw(ctx);
  Player.draw(ctx);
  Attack.draw(ctx);
}

export { canvas, render, updateRenderWindow, clearWindow, ctx, updateEnemiesPosition };
