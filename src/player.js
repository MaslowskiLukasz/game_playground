import { gridState } from "./grid";

const playerPosition = {
  x: 4,
  y: 4
};

const Direction = {
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right'
};

const moveUp = () => {
  if (playerPosition.y > 0) {
    const { x, y } = playerPosition;
    if (gridState[y - 1][x] === 0) {
      playerPosition.y -= 1;
    }
  }
}

const moveDown = () => {
  if (playerPosition.y < 15) {
    playerPosition.y += 1;
  }
}

const moveLeft = () => {
  if (playerPosition.x > 0) {
    playerPosition.x -= 1;
  }
}

const moveRight = () => {
  if (playerPosition.x < 15) {
    playerPosition.x += 1;
  }
}

export { playerPosition, moveRight, moveLeft, moveDown, moveUp };
