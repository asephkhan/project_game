class Obstacle {
  constructor(game, color, y) {
    this.game = game;
    this.x = 1200;
    this.y = y;
    this.width = 50;
    this.height = 150;
    this.color = color;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  draw() {
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
