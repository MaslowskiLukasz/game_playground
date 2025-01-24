import { SQUARE_SIZE } from "./constants";
import { movementState } from "./controls";
import { gridState } from "./grid";
import { sprites } from "./sprites";
import { animate } from "./animation";
import { checkInBoundWorld } from "./helpers";

const Player = {
  position: {
    x: 0,
    y: 0
  },
  speed: 1,
  updatePosition() {
    if (movementState.UP) {
      const newPosition = Player.position.y - Player.speed;
      if (checkInBoundWorld(newPosition) && !checkCollision('up')) {
        Player.position.y = newPosition;
      }
    }
    if (movementState.DOWN) {
      const newPosition = Player.position.y + Player.speed;
      if (checkInBoundWorld(newPosition) && !checkCollision('down')) {
        Player.position.y += Player.speed;
      }
    }

    if (movementState.LEFT) {
      const newPosition = Player.position.x - Player.speed;
      if (checkInBoundWorld(newPosition) && !checkCollision('left')) {
        Player.position.x -= Player.speed;
      }
    }
    if (movementState.RIGHT) {
      const newPosition = Player.position.x + Player.speed;
      if (checkInBoundWorld(newPosition) && !checkCollision('right')) {
        Player.position.x += Player.speed;
      }
    }
  },
  gridPosition() {
    const x = Math.floor((this.position.x + SQUARE_SIZE / 2) / SQUARE_SIZE);
    const y = Math.floor((this.position.y + SQUARE_SIZE / 2) / SQUARE_SIZE);
    return { x, y };
  },
  movementAnimationCount: 0,
  currentFrame: 0,
  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    if (movementState.RIGHT === true ||
      movementState.LEFT === true ||
      movementState.UP === true ||
      movementState.DOWN === true
    ) {
      const { currentFrame, animationCount } = animate(3, this.currentFrame, this.movementAnimationCount);
      this.currentFrame = currentFrame;
      this.movementAnimationCount = animationCount;
    } else {
      this.movementAnimationCount = 0;
      this.currentFrame = 0;
    }

    ctx.drawImage(
      sprites.frog,
      this.currentFrame * SQUARE_SIZE,
      0,
      SQUARE_SIZE,
      SQUARE_SIZE,
      Player.position.x,
      Player.position.y,
      SQUARE_SIZE,
      SQUARE_SIZE
    );
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
