import './style.css'
import { initGameState } from './controls'
import { render } from './render';
import { loadSprite } from './sprites';
import { updateEnemyPosition } from './render';

let lastUpdateTimestamp = 0;
loadSprite();
initGameState();

window.requestAnimationFrame(gameLoop);

function gameLoop(timestamp) {
  render();
  if (timestamp - lastUpdateTimestamp > 600) {
    updateEnemyPosition();
    lastUpdateTimestamp = timestamp;
  }
  window.requestAnimationFrame(gameLoop);
}

