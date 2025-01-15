import './style.css'
import { initGameState } from './controls'
import { render, update } from './render';
import { loadSprite } from './sprites';
import { draw, Enemy, findPath } from './enemy';
import { Player } from './player';

loadSprite();
initGameState();
// const path = findPath(Enemy.position, Player.position);
// draw(path);
// render();
// console.log(path);

window.requestAnimationFrame(gameLoop);

function gameLoop() {
  render();
  window.requestAnimationFrame(gameLoop);
}

