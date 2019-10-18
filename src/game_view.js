console.log("game view is here!")

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.interval = "";
    this.rightKey = false;
    this.leftKey = false;
    this.spacebar = false;
  }

  start() {
    let that = this;
    that.bindKeyHandlers();
    this.game.drawBackground(this.ctx);
    this.game.levelOne.draw(this.ctx);
    // requestAnimationFrame(start());
    this.interval = setInterval(function () {
      // this.ctx.clearRect(0, 0, game.width, game.height);
      that.game.draw(that.ctx);
    }, 1000/60)
    
  }

  stop() {

  }

  gameOver() {

  }

  win() {

  }

  keyDownHandler(e) {
    if (e.key === "ArrowRight" || e.key === "d") {
      this.rightKey = true;
      console.log("arrow-right down");
    } else if (e.key === "ArrowLeft" || e.key === "a") {
      this.leftKey = true
      console.log("arrow-left down");
    }

    if (e.key === " "){
      this.spacebar = true;
      console.log("space pushed")
      console.log(this.spacebar);
    }

    if (e.key === "ArrowLeft" && this.leftKey) {
      this.game.plumber.posX -= 7;
    }
    if (e.key === "ArrowRight" && this.rightKey) {
      this.game.plumber.posX += 7;
    }

    if (e.key === " " && this.spacebar && this.game.plumber.canJump) {
      this.game.plumber.posY -= 50;
      this.game.plumber.canJump = false;
    } else if (!this.spacebar && this.game.plumber.posY <= 500){
      if (this.rightKey) {
        this.game.plumber.posX += 7;
      } else if (this.leftKey) {
        this.game.plumber.posX -= 7;
      }
    } else if (!this.spacebar && this.game.plumber.posY <= 500){
      this.game.plumber.posY += 10;
    }

    console.log(e.keyCode);

  }

  keyUpHandler(e) {
    if (e.key === "ArrowRight" || e.key === "d") {
      this.rightKey = false;
      console.log("arrow-right up");
    } else if (e.key === "ArrowLeft" || e.key === "a") {
      this.leftKey = false
      console.log("arrow-left up");
    }

    if (e.key === " "){
      this.spacebar = false;
      console.log("spacebar up")
    }
  }

  bindKeyHandlers() {
    let gameV = this;
    document.addEventListener("keydown", (e) => this.keyDownHandler(e), false);
    document.addEventListener("keyup", (e) => this.keyUpHandler(e), false);
  }
}

export default GameView;