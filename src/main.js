import './style.css'
import { setupEventListener, keyUpEventListener, keyDownEventListener, Test, animate, resetAnimate } from './controls';
import { render } from './render';
import { loadSprite } from './sprites';
import { updateEnemiesPosition } from './render';
import { clearWindow } from './render';

let lastUpdateTimestamp = 0;

const initGameState = () => {
  render();
  setupEventListener();
  keyDownEventListener();
  keyUpEventListener();
}

loadSprite();
initGameState();

window.requestAnimationFrame(gameLoop);

let count = 0;
function gameLoop(timestamp) {
  if (animate) {
    count = count + 1;

    if (count > 20) {
      Test.changeCurrentFrame();
      count = 0;
    }
  }
  clearWindow();
  render();
  if (timestamp - lastUpdateTimestamp > 600) {
    updateEnemiesPosition();
    lastUpdateTimestamp = timestamp;
  }
  window.requestAnimationFrame(gameLoop);
}

