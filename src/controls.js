import { render, updateRenderWindow } from "./render";
import { gridState } from "./grid";
import { playerPosition } from "./player";

const setupEventListener = () => {
  window.addEventListener('keydown', (event) => {
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

    updateRenderWindow();
    render();
  })
}

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

const initGameState = () => {
  render();
  setupEventListener();
}


export { initGameState }
