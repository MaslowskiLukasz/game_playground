import { moveDown, moveLeft, moveRight, moveUp } from "./player";
import { render } from "./render";

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

    render();
  })
}

const initGameState = () => {
  render();
  setupEventListener();
}


export { initGameState }
