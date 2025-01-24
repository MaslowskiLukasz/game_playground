import { Player } from "./player";
import { NUMBER_OF_SQUARES, SQUARE_SIZE } from "./constants";
import { sprites } from "./sprites";

const movementState = {
  UP: false,
  DOWN: false,
  LEFT: false,
  RIGHT: false
}

/**
 * Call movement funcitons and update Player position and render window
 * @param {KeyboardEvent} event
 */
const executeMovement = (event) => {
  switch (event.key) {
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

  // Player.updatePosition();
  // resetMovementState();
}

/** Sets up event listeners for movement */
const setupEventListener = () => {
  window.addEventListener('keydown', (event) => executeMovement(event))
  window.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        movementState.LEFT = false;
        break;
      case 'ArrowRight':
        movementState.RIGHT = false;
        break;
      case 'ArrowUp':
        movementState.UP = false;
        break;
      case 'ArrowDown':
        movementState.DOWN = false;
        break;
    }
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

/** Checks if Player can move up */
const moveUp = () => {
  if (Player.position.y > 0) {
    movementState.UP = true;
  }
}

/** Checks if Player can move down */
const moveDown = () => {
  if (canMove(Player.position.y)) {
    movementState.DOWN = true;
  }
}

/** Checks if Player can move left */
const moveLeft = () => {
  if (Player.position.x > 0) {
    movementState.LEFT = true;
  }
}

/** Checks if Player can move right */
const moveRight = () => {
  if (canMove(Player.position.x)) {
    movementState.RIGHT = true;
  }
}

export {
  setupEventListener,
  movementState,
}
