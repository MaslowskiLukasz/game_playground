import { gridState } from "./grid";
import { moveDown, moveLeft, moveRight, moveUp, playerPosition } from "./player";

const NUMBER_OF_SQUARES = 16;

const GRASS_COLOR = '#0f0';
const WATER_COLOR = '#00f';
const HOLE_COLOR = '#000';
const PLAYER_COLOR = '#f00';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const getSquareColor = (square) => {
  if (square === 0) {
    return GRASS_COLOR;
  } else if (square === 1) {
    return WATER_COLOR;
  }

  return HOLE_COLOR;
}
const draw = () => {
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

const setupEventListener = () => {
  console.log('event listener setup');
  window.addEventListener('keydown', (event) => {
    console.log('event');
    const key = event.key;

    switch (key) {
      case 'ArrowLeft':
        moveLeft();
        break;
      case 'ArrowRight':
        moveRight();
        break;
      case 'ArrowUp':
        moveUp();
        break;
      case 'ArrowDown':
        moveDown();
        break;
    }

    draw();
  })
}

const initCanvas = () => {
  draw();
  setupEventListener();
}


export { initCanvas }
