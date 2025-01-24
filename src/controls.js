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

  Player.updatePosition();
  // resetMovementState();
}

/** Sets up event listeners for movement */
const setupEventListener = () => {
  window.addEventListener('keydown', (event) => executeMovement(event))
  window.addEventListener('keyup', () => {
    resetMovementState();
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

/**
 * Resets movement state
 */
const resetMovementState = () => {
  movementState.UP = false;
  movementState.DOWN = false;
  movementState.LEFT = false;
  movementState.RIGHT = false;
}

let animate = false;
const resetAnimate = () => {
  animate = false;
}
const Test = {
  position: {
    x: 0,
    y: 120
  },
  currentFrame: 0,
  changeCurrentFrame() {
    const maxFrames = 3;
    this.currentFrame = this.currentFrame + 1;
    if (this.currentFrame >= maxFrames) {
      this.currentFrame = 0;
    }
  },
}

/** @param {CanvasRenderingContext2D} ctx */
const drawTest = (ctx) => {
  ctx.drawImage(
    sprites.frog,
    Test.currentFrame * SQUARE_SIZE,
    0,
    SQUARE_SIZE,
    SQUARE_SIZE,
    Test.position.x,
    Test.position.y,
    SQUARE_SIZE,
    SQUARE_SIZE
  );
}
const keyDownEventListener = () => {
  window.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
      animate = true;
    }
  });
}
const keyUpEventListener = () => {
  window.addEventListener('keyup', (event) => {
    if (event.key === ' ') {
      animate = false;
    }
  })
}

export {
  setupEventListener,
  resetMovementState,
  movementState,
  keyDownEventListener,
  keyUpEventListener,
  Test,
  animate,
  drawTest,
  resetAnimate,
}
