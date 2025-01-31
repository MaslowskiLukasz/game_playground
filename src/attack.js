import { SQUARE_SIZE } from "./constants";
import { sprites } from "./sprites";

const Attack = {
  position: {
    x: 0,
    y: 0
  },
  type: 0,
  /** @param {MouseEvent} event */
  setPosition(event) {
    const { clientX, clientY } = event;
    this.position.x = clientX;
    this.position.y = clientY;
  },
  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    // console.log('attack', this.position);
    const x = this.position.x - canvas.offsetLeft;
    const y = this.position.y - canvas.offsetTop;
    const offsetX = x - SQUARE_SIZE / 2;
    const offsetY = y - SQUARE_SIZE / 2;
    ctx.drawImage(sprites.frog, 0, 0, SQUARE_SIZE, SQUARE_SIZE, offsetX, offsetY, SQUARE_SIZE, SQUARE_SIZE);
  }
}

export { Attack }
