import './style.css'
import { initGameState } from './controls'
import { render } from './render';
import { loadSprite } from './sprites';

loadSprite();
initGameState();

window.requestAnimationFrame(gameLoop);

function gameLoop() {
  render();
  window.requestAnimationFrame(gameLoop);
}

