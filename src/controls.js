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
      movementState.LEFT = true;
      break;
    case 'ArrowRight':
      movementState.RIGHT = true;
      break;
    case 'ArrowUp':
      movementState.UP = true;
      break;
    case 'ArrowDown':
      movementState.DOWN = true;
      break;
  }
}

/**
 * @param {KeyboardEvent} event
 */
const resetMovement = (event) => {
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
}

/** Sets up event listeners for movement */
const setupEventListener = () => {
  window.addEventListener('keydown', (event) => executeMovement(event));
  window.addEventListener('keyup', (event) => resetMovement(event));
}

export {
  setupEventListener,
  movementState,
}
