class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
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
    this.color = ['red', 'blue', 'green', 'yellow'];
    this.obstaclesY = [0, 150, 300, 450]
    this.isPassing = false;
  }

  start() {
    //this will trigger only once
    this.ball = new Ball(this, 200, 500);
    const controls = new Controls(this);
    controls.keyboardEvents();

    //this will run at 60 fps
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
  }

  update() {
    this.drawBackground();
    this.ball.drawBall();
    this.createObstacles();
    this.obstacles.forEach((obstacle) => {
      obstacle.x--;
      obstacle.draw();
      if (this.ball.crashWith(obstacle)) {
        if (this.ball.color !== obstacle.color) {
          this.stop();
        } else {
          console.log("right color");
          setTimeout(() => {
            this.ball.color = this.color[Math.floor(Math.random() * this.color.length)];

          }, 2000);
          
          this.isPassing = true;
          
          console.log(this.score);
        }
      } /* else {
         if (this.isPassing && obstacle.color === this.ball.color){
            this.isPassing = false;
            this.ball.color = this.color[1];
            this.score++;

         }
      } */
    });
    this.frames++;
    this.drawScore();
    //this.checkGameOver();
  }

  drawBackground() {
    this.background.src = "../images/background-image.jpg";
    this.ctx.drawImage(
      this.background,
      this.x,
      this.y,
      this.canvasWidth,
      this.canvasHeight
    );
  }
  createObstacles() {
    if (this.frames % 400 === 0) {
      //copying the arrays to not change the originals
      let colorsArray = [...this.color];
      let indexArray = [...this.obstaclesY]
  
      //iterating for the colors/indexes
      colorsArray.forEach((color) => {
        //Random number for each array
        let colorIndex = Math.floor(Math.random()* colorsArray.length );
        let yIndex = Math.floor(Math.random()* indexArray.length)
        
        //pass the random value in the obstacle
        this.obstacles.push(new Obstacle(this, colorsArray[colorIndex], indexArray[yIndex]));

        //take out the randoms to not get repeats
        indexArray.splice(colorIndex, 1);
        colorsArray.splice(yIndex, 1);

      })
/*       this.obstacles.push(new Obstacle(this, "red", 0));
      this.obstacles.push(new Obstacle(this, "green", 150));
      this.obstacles.push(new Obstacle(this, "blue", 300));
      this.obstacles.push(new Obstacle(this, "yellow", 450)); */
    }
  }

   checkGameOver() {
    const ball = this.ball;
    let ballColor = "";
    const crashed = this.obstacles.some(function (obstacle) {
      ballColor = obstacle.color;
      return ball.crashWith(obstacle);
    }); 
  }

  drawScore() {
    //let score = Math.floor(this.frames);
    this.ctx.font = "32px serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Score: ${this.score}`, 100, 30);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}
