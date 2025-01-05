import './style.css'
import { initGameState } from './controls'
import { render, update } from './render';

initGameState();

window.requestAnimationFrame(gameLoop);

function gameLoop() {
  update();
  render();
  window.requestAnimationFrame(gameLoop);
}
