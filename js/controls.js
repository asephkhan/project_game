class Controls {
    constructor(game) {
      this.game = game;
      this.ball = this.game.ball;
    }
  
    keyboardEvents() {
      window.addEventListener('keydown', (e) => {
        switch (e.code) {
          case 'ArrowUp':
              
             if (this.ball.y - 30 > 0) {
              this.ball.y -= 10;
            }
             
            break;
          case 'ArrowDown':
              
             if (this.ball.y + 30 < 600) {
              this.ball.y += 10;
            } 
            break;
        }
      });
    }
  }