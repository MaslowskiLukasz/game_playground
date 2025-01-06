import { render, update, updateRenderWindow } from "./render";
import { gridState } from "./grid";
import { playerPosition } from "./player";
import { NUMBER_OF_SQUARES } from "./constants";

const movementState = {
  UP: false,
  DOWN: false,
  LEFT: false,
  RIGHT: false
}

const setupEventListener = () => {
  window.addEventListener('keydown', (event) => {
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

    update();
    updateRenderWindow();
  })
}

/**
 * Check if player can move
  * @param {number} position
  * @returns {boolean}
  */
const canMove = (position) => {
  return position < NUMBER_OF_SQUARES * (NUMBER_OF_SQUARES - 1);
}

const moveUp = () => {
  if (playerPosition.y > 0) {
    movementState.UP = true;
  }
}

const moveDown = () => {
  if (canMove(playerPosition.y)) {
    movementState.DOWN = true;
  }
}

const moveLeft = () => {
  if (playerPosition.x > 0) {
    movementState.LEFT = true;
  }
}

const moveRight = () => {
  if (canMove(playerPosition.x)) {
    movementState.RIGHT = true;
  }
}

const resetMovementState = () => {
  movementState.UP = false;
  movementState.DOWN = false;
  movementState.LEFT = false;
  movementState.RIGHT = false;
}

const initGameState = () => {
  render();
  setupEventListener();
}


export { initGameState, resetMovementState, movementState }
