class Obstacle {
    constructor(game, color , y) {
      this.game = game;
      this.x = 1200;
      this.y = y; 
      this.width = 50;
      this.height =  150; 
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

    draw(){
      this.game.ctx.fillStyle = this.color;
      this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    drawRed() {
      this.game.ctx.fillStyle = 'red'
      this.game.ctx.fillRect(this.x, 0, this.width, this.height);
    }

    drawBlue() {
      this.game.ctx.fillStyle = 'blue'
      this.game.ctx.fillRect(this.x, 150, this.width, this.height);
    }

    drawGreen() {
      this.game.ctx.fillStyle = 'green'
      this.game.ctx.fillRect(this.x, 300, this.width, this.height);
    }

    drawYellow() {
      this.game.ctx.fillStyle = 'yellow'
      this.game.ctx.fillRect(this.x, 450, this.width, this.height);
    }
  }

 /*  let minHeight = 40;
  let maxHeight = 300;

  let height = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);

  let minGap = 50;
  let maxGap = 200;

  let gap = Math.floor(Math.random() * (maxGap - minGap) + minGap);

  myObstacles.push(new Component(30, height, 'green', x, 0));
  myObstacles.push(new Component(30, y - height - gap, 'green', x, height + gap)); */
