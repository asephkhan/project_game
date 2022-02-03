class Controls {
  constructor(game) {
    this.game = game;
    this.ball = this.game.ball;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowUp":
          if (this.ball.y - 30 > 0) {
            this.ball.y -= 25;
          }
           break;
        case "ArrowDown":
          if (this.ball.y + 30 < 600) {
            this.ball.y += 25;
          }
          break;
         /* case "ArrowRight":
          if (this.ball.x + 30 < 1200){
            this.ball.x += 25;
          }
          break;
        case "ArrowLeft":
          if (this.ball.x - 30 > 0){
            this.ball.x -= 25;
          }
          break ; */
      }
    });
  }
}
