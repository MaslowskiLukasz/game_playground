import { SQUARE_SIZE } from "./constants";
import { resetMovementState, movementState } from "./controls";
import { gridState } from "./grid";

const Player = {
  position: {
    x: 0,
    y: 0
  },
  speed: 8,
  updatePosition() {
    if (movementState.UP) {
      if (!checkCollision('up')) {
        Player.position.y -= Player.speed;
      }
    }
    if (movementState.DOWN) {
      if (!checkCollision('down')) {
        Player.position.y += Player.speed;
      }
    }

    if (movementState.LEFT) {
      if (!checkCollision('left')) {
        Player.position.x -= Player.speed;
      }
    }
    if (movementState.RIGHT) {
      if (!checkCollision('right')) {
        Player.position.x += Player.speed;
      }
    }
    resetMovementState();
  },
  gridPosition() {
    const x = Math.floor((this.position.x + SQUARE_SIZE / 2) / SQUARE_SIZE);
    const y = Math.floor((this.position.y + SQUARE_SIZE / 2) / SQUARE_SIZE);
    return { x, y };
  }
}

/** 
 * Check collision with map elements
 * @param {string} direction
 */
const checkCollision = (direction) => {
  switch (direction) {
    case "up":
      return checkUpSquareGrid();
    case "down":
      return checkDownSquareGrid();
    case "left":
      return checkLeftSquareGrid();
    case "right":
      return checkRightSquareGrid();
  }
}

/**
 * Check squares to top left and top right from player
 * @returns {boolean}
 */
const checkUpSquareGrid = () => {
  const y = Math.floor((Player.position.y - Player.speed) / SQUARE_SIZE);
  const xLeft = Math.floor(Player.position.x / SQUARE_SIZE);
  const xRight = Math.ceil(Player.position.x / SQUARE_SIZE);
  const leftValue = gridState[y][xLeft];
  const rightValue = gridState[y][xRight];

  if (leftValue !== 0 || rightValue !== 0) {
    return true;
  }
  return false;
}

/**
 * Check squares to down left and down right from player
 * @returns {boolean}
 */
const checkDownSquareGrid = () => {
  const y = Math.ceil((Player.position.y + Player.speed) / SQUARE_SIZE);
  const xLeft = Math.floor(Player.position.x / SQUARE_SIZE);
  const xRight = Math.ceil(Player.position.x / SQUARE_SIZE);
  const leftValue = gridState[y][xLeft];
  const rightValue = gridState[y][xRight];

  if (leftValue !== 0 || rightValue !== 0) {
    return true;
  }
  return false;
};

/**
 * Check squares to left top and left down from player
 * @returns {boolean}
 */
const checkLeftSquareGrid = () => {
  const yTop = Math.ceil(Player.position.y / SQUARE_SIZE);
  const yDown = Math.floor(Player.position.y / SQUARE_SIZE);
  const x = Math.floor((Player.position.x - Player.speed) / SQUARE_SIZE);
  const topValue = gridState[yTop][x];
  const downValue = gridState[yDown][x];

  if (topValue !== 0 || downValue !== 0) {
    return true;
  }
  return false;
};

/**
 * Check squares to right top and right down from player
 * @returns {boolean}
 */
const checkRightSquareGrid = () => {
  const yTop = Math.ceil(Player.position.y / SQUARE_SIZE);
  const yDown = Math.floor(Player.position.y / SQUARE_SIZE);
  const x = Math.ceil((Player.position.x + Player.speed) / SQUARE_SIZE);
  const topValue = gridState[yTop][x];
  const downValue = gridState[yDown][x];

  if (topValue !== 0 || downValue !== 0) {
    return true;
  }
  return false;
};

export { Player };
