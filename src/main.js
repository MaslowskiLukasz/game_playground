import './style.css'
import { setupEventListener } from './controls';
import { render } from './render';
import { loadSprite } from './sprites';
import { updateEnemiesPosition } from './render';
import { clearWindow } from './render';
import { Player } from './player';

let lastUpdateTimestamp = 0;

const initGameState = () => {
  render();
  setupEventListener();
}

loadSprite();
initGameState();

window.requestAnimationFrame(gameLoop);

// count slows down the animation
// need to figure out diagonal movement
// fix out of bounds
function gameLoop(timestamp) {
  clearWindow();
  Player.updatePosition();
  render();
  if (timestamp - lastUpdateTimestamp > 600) {
    updateEnemiesPosition();
    lastUpdateTimestamp = timestamp;
  }
  window.requestAnimationFrame(gameLoop);
}

