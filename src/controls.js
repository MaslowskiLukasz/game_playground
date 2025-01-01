import { moveDown, moveLeft, moveRight, moveUp } from "./player";
import { redraw } from "./render";

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

    redraw();
  })
}

const initGameState = () => {
  redraw();
  setupEventListener();
}


export { initGameState }
