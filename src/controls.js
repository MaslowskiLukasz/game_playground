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

/** Checks if Player can move up */
const moveUp = () => {
  movementState.UP = true;
}

/** Checks if Player can move down */
const moveDown = () => {
  movementState.DOWN = true;
}

/** Checks if Player can move left */
const moveLeft = () => {
  movementState.LEFT = true;
}

/** Checks if Player can move right */
const moveRight = () => {
  movementState.RIGHT = true;
}

export {
  setupEventListener,
  movementState,
}
