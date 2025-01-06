import './style.css'
import { initGameState } from './controls'
import { render } from './render';

initGameState();

window.requestAnimationFrame(gameLoop);

function gameLoop() {
  render();
  window.requestAnimationFrame(gameLoop);
}

