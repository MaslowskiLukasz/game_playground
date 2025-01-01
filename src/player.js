import { gridState } from "./grid";
import { updateRenderWindow } from "./render";

const playerPosition = {
  x: 3,
  y: 3
};

const moveUp = () => {
  const { x, y } = playerPosition;
  if (y > 0) {
    if (gridState[y - 1][x] === 0) {
      playerPosition.y -= 1;
    }
  }
  updateRenderWindow();
}

const moveDown = () => {
  const { x, y } = playerPosition;
  if (y < 15) {
    if (gridState[y + 1][x] === 0) {
      playerPosition.y += 1;
    }
  }
  updateRenderWindow();
}

const moveLeft = () => {
  const { x, y } = playerPosition;
  if (x > 0) {
    if (gridState[y][x - 1] === 0) {
      playerPosition.x -= 1;
    }
  }
  updateRenderWindow();
}

const moveRight = () => {
  const { x, y } = playerPosition;
  if (x < 15) {
    if (gridState[y][x + 1] === 0) {
      playerPosition.x += 1;
    }
  }
  updateRenderWindow();
}

export { playerPosition, moveRight, moveLeft, moveDown, moveUp };
