import { moveDown, moveLeft, moveRight, moveUp, playerPosition } from "./player";
import { gridState } from "./grid";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const NUMBER_OF_SQUARES = 16;

const GRASS_COLOR = '#0f0';
const WATER_COLOR = '#00f';
const HOLE_COLOR = '#000';
const PLAYER_COLOR = '#f00';

const getSquareColor = (square) => {
  if (square === 0) {
    return GRASS_COLOR;
  } else if (square === 1) {
    return WATER_COLOR;
  }

  return HOLE_COLOR;
}

const redraw = () => {
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

export { redraw };
