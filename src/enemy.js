const Enemy = {
  position: {
    x: 15,
    y: 15
  },
  speed: 1,
  move(position) {
    this.position.x = position.x;
    this.position.y = position.y;
  }
}

export { Enemy };
