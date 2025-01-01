import { gridState } from "./grid";

const playerPosition = {
  x: 4,
  y: 4
};

const moveUp = () => {
  const { x, y } = playerPosition;
  if (y > 0) {
    if (gridState[y - 1][x] === 0) {
      playerPosition.y -= 1;
    }
  }
}

const moveDown = () => {
  const { x, y } = playerPosition;
  if (y < 15) {
    if (gridState[y + 1][x] === 0) {
      playerPosition.y += 1;
    }
  }
}

const moveLeft = () => {
  const { x, y } = playerPosition;
  if (x > 0) {
    if (gridState[y][x - 1] === 0) {
      playerPosition.x -= 1;
    }
  }
}

const moveRight = () => {
  const { x, y } = playerPosition;
  if (x < 15) {
    if (gridState[y][x + 1] === 0) {
      playerPosition.x += 1;
    }
  }
}

export { playerPosition, moveRight, moveLeft, moveDown, moveUp };
