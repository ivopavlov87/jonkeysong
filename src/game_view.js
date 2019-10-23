// console.log("game view is here!")
class GameView {
  constructor(game, ctx, canvas) {
    this.game = game;
    this.ctx = ctx;
    this.canvas = canvas;
    this.interval = "";
    this.rightKey = false;
    this.leftKey = false;
    this.spacebar = false;
    this.frameCount = 0;
    this.jumpHeight = 0;

    this.loop = this.loop.bind(this)
  }

  start() {
    this.bindKeyHandlers();

    this.game.draw(this.ctx);

    this.lastTime = 0;
    requestAnimationFrame(this.loop.bind(this));
    
  }


  loop(time){
    // console.log("inside the gameloop")
    const timeDelta = time - this.lastTime;
    this.frameCount += 1;

    if (this.frameCount > 50){ 
      this.game.jonkeySong.frame += 1;
      this.game.flameBarrel.frame += 1;
      this.frameCount = 0;
    }

    if (this.game.flameBarrel.frame > 1) this.game.flameBarrel.frame = 0;

    this.ctx.clearRect(0, 0, this.game.width, this.game.height);

    this.game.plumber.move(timeDelta);
    this.game.draw(this.ctx);

    this.lastTime = time
    requestAnimationFrame(this.loop.bind(this))
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
      // console.log("arrow-right down");
    } 
    
    if (e.key === "ArrowLeft" || e.key === "a") {
      this.leftKey = true
      // console.log("arrow-left down");
    }

    if (e.key === " "){
      this.spacebar = true;
    }

    if (this.leftKey) {
      this.game.plumber.dX = -3;
      this.game.plumber.direction = "left";
      this.game.plumber.frame += 1
    }
    if (this.rightKey) {
      this.game.plumber.dX = 3;
      this.game.plumber.direction = "right";
      this.game.plumber.frame += 1
    }

    if (this.game.plumber.canJump && this.game.plumber.onSurface && this.spacebar) {
        this.game.plumber.frame = 2;
        this.game.plumber.jumping = true;
        this.game.plumber.falling = false;
    }

  }

  keyUpHandler(e) {
    if (e.key === "ArrowRight" || e.key === "d") {
      this.game.plumber.direction = "right";
      this.rightKey = false;
      this.game.plumber.dX = 0;
    }
    
    if (e.key === "ArrowLeft" || e.key === "a") {
      this.game.plumber.direction = "left";
      this.leftKey = false;
      this.game.plumber.dX = 0;
    }

    if (e.key === " "){
      this.spacebar = false;
      this.game.plumber.jumping = false;
    }
  }

  bindKeyHandlers() {
    document.addEventListener("keydown", (e) => this.keyDownHandler(e), false);
    document.addEventListener("keyup", (e) => this.keyUpHandler(e), false);
  }
}

export default GameView;