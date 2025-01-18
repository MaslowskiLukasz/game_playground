import { update, updateRenderWindow } from "./render";
import { Player } from "./player";
import { NUMBER_OF_SQUARES, SQUARE_SIZE } from "./constants";

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
  return position < SQUARE_SIZE * (NUMBER_OF_SQUARES - 1);
}

const moveUp = () => {
  if (Player.position.y > 0) {
    movementState.UP = true;
  }
}

const moveDown = () => {
  if (canMove(Player.position.y)) {
    movementState.DOWN = true;
  }
}

const moveLeft = () => {
  if (Player.position.x > 0) {
    movementState.LEFT = true;
  }
}

const moveRight = () => {
  if (canMove(Player.position.x)) {
    movementState.RIGHT = true;
  }
}

const resetMovementState = () => {
  movementState.UP = false;
  movementState.DOWN = false;
  movementState.LEFT = false;
  movementState.RIGHT = false;
}


export { setupEventListener, resetMovementState, movementState }
