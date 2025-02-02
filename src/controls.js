import { canvas } from "./render";
import { Attack } from "./attack";

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
    case 'a':
      movementState.LEFT = true;
      break;
    case 'd':
      movementState.RIGHT = true;
      break;
    case 'w':
      movementState.UP = true;
      break;
    case 's':
      movementState.DOWN = true;
      break;
  }
}

/**
 * @param {KeyboardEvent} event
 */
const resetMovement = (event) => {
  switch (event.key) {
    case 'a':
      movementState.LEFT = false;
      break;
    case 'd':
      movementState.RIGHT = false;
      break;
    case 'w':
      movementState.UP = false;
      break;
    case 's':
      movementState.DOWN = false;
      break;
  }
}

/** Sets up event listeners for movement */
const setupEventListener = () => {
  window.addEventListener('keydown', (event) => executeMovement(event));
  window.addEventListener('keyup', (event) => resetMovement(event));
  canvas.addEventListener('click', (event) => {
    Attack.setPosition(event)
    Attack.playAnimation = true;
  });
}

export {
  setupEventListener,
  movementState,
}
