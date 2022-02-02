class Game {
        constructor() {
            this.canvas = document.getElementById('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.ball = null;
            this.obstacles = [];
            this.background = new Image();
            this.frames = 0;
            this.x = 0;
            this.y = 0;
            this.canvasWidth = 1200;
            this.canvasHeight = 600;
            this.intervalId = null; 
            this.score = 0;
    }

start() {
   //this will trigger only once
    this.ball = new Ball(this, 200, 500, );
   const controls = new Controls(this);
   controls.keyboardEvents();  

   //this will run at 60 fps
   this.intervalId = setInterval(() => {
     this.update();
   }, 1000 / 60);
 }


update () {
   this.drawBackground();
   this.ball.drawBall();
   this.createObstacles();
   this.obstacles.forEach((obstacle) => {
      obstacle.x--;
      obstacle.draw();
      if (this.ball.crashWith(obstacle)) {
            if(this.ball.color !== obstacle.color){
              this.stop();
            } else {
               console.log('right color')
               this.score++;
               this.ball
               console.log(this.score)
         }
      }
/*       obstacle.drawBlue(); 
      obstacle.drawGreen();
      obstacle.drawYellow(); */
      

    });
    this.frames++;
  this.drawScore();
  //this.checkGameOver();

}

 /* clear() {
   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};  */



drawBackground() {
   this.background.src = '../images/background-image.jpg';
   this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight);
   
}
createObstacles() {
  
   if (this.frames % 300 === 0) {
     this.obstacles.push(new Obstacle(this, 'red', 0));
     this.obstacles.push(new Obstacle(this, 'green', 150));
     this.obstacles.push(new Obstacle(this, 'blue', 300));
     this.obstacles.push(new Obstacle(this, 'yellow', 450));
   }

}

checkGameOver() {
   const ball = this.ball
   let ballColor = '';
   const crashed = this.obstacles.some(function (obstacle){
      ballColor = obstacle.color;
      return ball.crashWith(obstacle);
   });
   
}

drawScore() {
  //let score = Math.floor(this.frames);
  this.ctx.font = '32px serif';
  this.ctx.fillStyle = 'white';
  this.ctx.fillText(`Score: ${this.score}`, 100, 30); 
}

stop() {
   clearInterval(this.intervalId);
 }
}