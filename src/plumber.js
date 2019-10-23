
class Plumber{
  constructor(game) {
    this.game = game;
    this.posX = 430;
    this.posY = 503;
    this.width = 14;
    this.height = 16;
    this.dX = 0;
    this.dY = 0; // was 9
    this.direction = "left"
    this.falling = false;
    this.jumping = false;
    this.canJump = true;
    this.jumpStart = 0;
    this.onSurface = true;
    this.frame = 0;

    this.sprite = new Image();
    this.sprite.src = "../img/sprites.png";
  }

  draw(ctx){
    // debugger;
    const plumberR = {
      walkRightAnimation: [
        { sX: 158, sY: 3 },
        { sX: 176, sY: 4 },
        { sX: 197, sY: 3 },
        { sX: 176, sY: 4 },
        { sX: 158, sY: 3 }
      ],
      x: this.posX,
      y: this.posY,
      w: this.width,
      h: this.height,
    }

    const plumberL = {
      walkLeftAnimation: [
        { sX: 136, sY: 3 },
        { sX: 115, sY: 4 },
        { sX: 94, sY: 3 },
        { sX: 115, sY: 4 },
        { sX: 136, sY: 3 }
      ],
      x: this.posX,
      y: this.posY,
      w: this.width,
      h: this.height,
    };

    let plumber = this.direction === "left" ? 
    plumberL.walkLeftAnimation[this.frame] 
    : plumberR.walkRightAnimation[this.frame];

    if (this.direction === "left"){
      ctx.drawImage(this.sprite,
        plumber.sX,
        plumber.sY,
        plumberL.w,
        plumberL.h,
        plumberL.x,
        plumberL.y,
        plumberL.w * this.game.scale,
        plumberL.h * this.game.scale
      );
    } else if (this.direction === "right") {
      ctx.drawImage(this.sprite,
        plumber.sX,
        plumber.sY,
        plumberR.w,
        plumberR.h,
        plumberR.x,
        plumberR.y,
        plumberR.w * this.game.scale,
        plumberR.h * this.game.scale
      );
    }

    const plumberWidth = this.width * this.game.scale;

    // UNIVERSAL TOP BOUNDRY
    if (this.posY < (this.height * this.game.scale)) {
      this.posY = (this.height * this.game.scale)
    };

    // UNIVERSAL LEFT BOUNDRY
    if (this.posX < 0) this.posX = 0;
    
    // UNIVERSAL RIGHT BOUNDRY
    if (this.posX > (this.game.width - plumberWidth)) {
      this.posX = (this.game.width - plumberWidth);
    };

    // GROUND BOUNDRY
    if (this.posY >= 503) {
      // this.posY = 503;

      this.canJump = true;
      this.falling = false;
      this.onSurface = true;
    };

    // if (this.posX >= 450) {
    //   this.posX = 450
    // }
    
  }

  move(timeDelta){
    // debugger;
    if (this.frame > 4){
      this.frame = 0
    }

    if (this.onSurface) {
      this.dY = 0;
      this.falling = false;
      this.canJump = true;
    };

    if (this.jumping && this.canJump){
      this.dY = -5;
      this.falling = true;
      this.canJump = false;
      this.onSurface = false;
    }
    

    if (this.falling && !this.onSurface){
      this.dY += 0.3;
    }
    

    // FIRE BARREL COLLISION DETECTION, NEED TO MOVE/IMPLEMENT ELSEWHERE
    // FOR TESTING PURPOSES
    if (this.posX >= 435 && this.posY <= 480 && this.posY >= 470){
      this.onSurface = true;
    } else if (this.posX < 435) {
      this.onSurface = false;
      this.falling = true;
    } else if (this.posX > 435 && this.posY > 500){
      this.posX = 435;
    }

    const normal = 1000 / 60
    const velocityScale = timeDelta / normal;
    

    const offsetX = this.dX * velocityScale;
    const offsetY = this.dY * velocityScale;

    this.posX += offsetX;
    this.posY += offsetY;

    // UNIVERSAL GROUND BOUNDRY AGAIN
    if (this.posY >= 503) this.posY = 503;
  }
}

export default Plumber;