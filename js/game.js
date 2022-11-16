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
    this.color = ["#E66E7B", "#A3B371", '#F4B99A', "#6E5681"];
    this.obstaclesY = [0, 150, 300, 450];
    this.isPassing = false;
    this.passedObstacle = false;
  }

  start() {
    //this will trigger only once
    this.ball = new Ball(this, 200, 400);
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
      obstacle.x -= 4;
      obstacle.draw();

      if (this.ball.passedThrough(obstacle)) {
        this.passedObstacle = true;
        this.ball.color =
          this.color[Math.floor(Math.random() * this.color.length)];
      }

      if (this.ball.crashWith(obstacle)) {
        if (this.ball.color !== obstacle.color) {
          this.stop();
        }
        this.isPassing = true;
      }
    });
    this.frames++;
    this.drawScore();
    console.log(this.passedObstacle);
  }

  drawBackground() {
    this.background.src = "./docs/assets/images/Asifs-Background.png";
    this.ctx.drawImage(
      this.background,
      this.x,
      this.y,
      this.canvasWidth,
      this.canvasHeight
    );
  }
  createObstacles() {
    if (this.frames % 140 === 0) {
      //copying the arrays to not change the originals
      let colorsArray = [...this.color];
      let indexArray = [...this.obstaclesY];

      //iterating for the colors/indexes
      this.color.forEach((color) => {
        //Random number for each array
        let colorIndex = Math.floor(Math.random() * colorsArray.length);
        let yIndex = Math.floor(Math.random() * indexArray.length);

        //pass the random value in the obstacle
        this.obstacles.push(
          new Obstacle(this, colorsArray[colorIndex], indexArray[yIndex])
        );

        //take out the randoms to not get repeats
        indexArray.splice(yIndex, 1);
        colorsArray.splice(colorIndex, 1);
      });
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
    this.ctx.font = "32px Montserrat";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Score: ${Math.floor(this.frames / 30 )}`, 50, 50);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}
