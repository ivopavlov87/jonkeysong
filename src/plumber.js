
class Plumber{
  constructor(game) {
    this.game = game;
    this.posX = 430;
    this.posY = 503;
    this.dX = 0;
    this.dY = 0;
    this.canJump = true;
  }

  draw(ctx){
    const sprite = new Image();
    sprite.src = "../img/sprites.png";

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
      w: 12,
      h: 16,

      frame: 0
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
      w: 12,
      h: 16,

      frame: 0
    };

    let plumber = plumberL.walkLeftAnimation[plumberL.frame];

    sprite.onload = function () {
      ctx.drawImage(sprite,
        plumber.sX,
        plumber.sY,
        plumberL.w,
        plumberL.h,
        plumberL.x,
        plumberL.y,
        plumberL.w * 1.5,
        plumberL.h * 1.5);
    }

    if (this.posY < 504 && this.posX < 32) {
      
      // this.canJump = false;
      this.posY += 1;
      

      // 
    }
    if (this.posY = 504) this.canJump = true;

    if (this.posX < 0) this.posX = 0;
    if (this.posX > 480) this.posX = 480 - plumberL.w*2;
  }
}

export default Plumber;