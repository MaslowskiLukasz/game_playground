import { playerPosition } from "./player";
import { gridState } from "./grid";
import { NUMBER_OF_SQUARES, GRASS_COLOR, WATER_COLOR, HOLE_COLOR, PLAYER_COLOR, WINDOW_SIZE } from "./constants";
import { CAMERA_MODE, CAMERA_MODES } from "./constants";

const canvas = document.getElementById('canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

let windowStartPosition = {
  x: 0,
  y: 0,
}

/**
 * Converts number on tile map to color
 * @param {number} square
  */
const getSquareColor = (square) => {
  if (square === 0) {
    return GRASS_COLOR;
  } else if (square === 1) {
    return WATER_COLOR;
  }

  return HOLE_COLOR;
}

/**
 * Check if point is outside of grid map
 * @param {number} value
  */
const checkOutOfBounds = (value) => {
  if (value < 0 || value + WINDOW_SIZE > NUMBER_OF_SQUARES) {
    return true;
  }
  return false;
}

const updateRenderWindow = () => {
  const newPosition = {
    x: playerPosition.x - Math.floor(WINDOW_SIZE / 2),
    y: playerPosition.y - Math.floor(WINDOW_SIZE / 2)
  }
  windowStartPosition.x = checkOutOfBounds(newPosition.x) ? windowStartPosition.x : newPosition.x;
  windowStartPosition.y = checkOutOfBounds(newPosition.y) ? windowStartPosition.y : newPosition.y;
}

const clearWindow = () => {
  for (let y = 0; y < NUMBER_OF_SQUARES; y++) {
    for (let x = 0; x < NUMBER_OF_SQUARES; x++) {
      ctx.fillStyle = '#000';
      ctx.fillRect(x * NUMBER_OF_SQUARES, y * NUMBER_OF_SQUARES, NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
    }
  }
}

const redrawStillCamera = () => {
  for (let y = 0; y < NUMBER_OF_SQUARES; y++) {
    for (let x = 0; x < NUMBER_OF_SQUARES; x++) {
      if (playerPosition.x === x && playerPosition.y === y) {
        ctx.fillStyle = PLAYER_COLOR;
      } else {
        ctx.fillStyle = getSquareColor(gridState[y][x]);
      }
      ctx.fillRect(x * NUMBER_OF_SQUARES, y * NUMBER_OF_SQUARES, NUMBER_OF_SQUARES, NUMBER_OF_SQUARES);
    }
  }
}

const redrawMovingCamera = () => {
  for (let y = 0; y < WINDOW_SIZE; y++) {
    for (let x = 0; x < WINDOW_SIZE; x++) {
      const gridIndex = {
        x: windowStartPosition.x + x,
        y: windowStartPosition.y + y
      }
      if (playerPosition.x === gridIndex.x && playerPosition.y === gridIndex.y) {
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
    default:
      redrawStillCamera();
  }
}

const render = () => {
  clearWindow();
  redraw();
}

export { render, updateRenderWindow };
