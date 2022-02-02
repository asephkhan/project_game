   class Ball {
    constructor(game, x, y,){
        this.game = game;
        this.x = x;
        this.y = y;
        /* this.width = width;
        this.height = height; */
        this.img = new Image();
        this.canvas;
        this.color = 'red';
    }
    left() {
        return this.x - 30 ;
    }
    right() {
        return this.x + 30;
    }

    top () {
        return this.y - 30;   
    }
    bottom() {
        return this.y + 30;
    }

     crashWith(obstacle) {
        return !(
          (this.bottom() < obstacle.top() ||
          this.top() > obstacle.bottom() ||
          this.right() < obstacle.left() ||
          this.left() > obstacle.right())
        );
      } 


drawBall(){
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x,this.y , 30, Math.PI*2, false);
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fill();
    this.game.ctx.closePath();
}

drawGreenBall() {
   this.game.ctx.beginPath();
   this.game.ctx.arc(this.x,this.y , 30, Math.PI*2, false);
   this.game.ctx.fillStyle = 'green';
   this.game.ctx.fill();
   this.game.ctx.closePath();
  

  }

  drawRedBall() {
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x,this.y , 30, Math.PI*2, false);
    this.game.ctx.fillStyle = 'red';
    this.game.ctx.fill();
    this.game.ctx.closePath();
   
 
   }

   drawBlueBall() {
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x,this.y , 30, Math.PI*2, false);
    this.game.ctx.fillStyle = 'blue';
    this.game.ctx.fill();
    this.game.ctx.closePath();
   
 
   }

   drawYellowBall() {
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x,this.y , 30, Math.PI*2, false);
    this.game.ctx.fillStyle = 'yellow';
    this.game.ctx.fill();
    this.game.ctx.closePath();
   
 
   }
 
 
}


