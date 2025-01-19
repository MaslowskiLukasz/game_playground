import './style.css'
import { setupEventListener } from './controls';
import { render } from './render';
import { loadSprite } from './sprites';
import { updateEnemiesPosition } from './render';

let lastUpdateTimestamp = 0;

const initGameState = () => {
  render();
  setupEventListener();
}

loadSprite();
initGameState();

window.requestAnimationFrame(gameLoop);

function gameLoop(timestamp) {
  render();
  if (timestamp - lastUpdateTimestamp > 600) {
    updateEnemiesPosition();
    lastUpdateTimestamp = timestamp;
  }
  window.requestAnimationFrame(gameLoop);
}

