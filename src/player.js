import { SQUARE_SIZE } from "./constants";
import { resetMovementState, movementState } from "./controls";
import { gridState } from "./grid";

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

const Player = {
  position: {
    x: 4,
    y: 8
  },
  speed: 1,
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
  }
}

export { Player };
