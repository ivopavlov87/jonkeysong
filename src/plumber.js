
class Plumber{
  constructor(game) {
    this.game = game;
    this.posX = 430;
    this.posY = 503;
    this.dX = 0;
    this.dY = 9;
    this.canJump = true;
    this.frame = 0;
    this.direction = "left"
    this.jumpHeight = 0;

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
      w: 14,
      h: 16,
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
    };

    let plumber = this.direction === "left" ? plumberL.walkLeftAnimation[this.frame] : plumberR.walkRightAnimation[this.frame];

    if (this.direction === "left"){
      ctx.drawImage(this.sprite,
        plumber.sX,
        plumber.sY,
        plumberL.w,
        plumberL.h,
        plumberL.x,
        plumberL.y,
        plumberL.w * 1.5,
        plumberL.h * 1.5
      );
    } else if (this.direction === "right") {
      ctx.drawImage(this.sprite,
        plumber.sX,
        plumber.sY,
        plumberR.w,
        plumberR.h,
        plumberR.x,
        plumberR.y,
        plumberR.w * 1.5,
        plumberR.h * 1.5
      );
    }

    if (this.posX < 5) this.posX = 5;
    
    if (this.posX > 455) this.posX = 455;
    if (this.posY > 503 && !this.canJump) this.canJump = true;
  }

  

  move(timeDelta){
    // debugger;
    if (this.frame > 4){
      this.frame = 0
    }

    const normal = 1000 / 60
    const velocityScale = timeDelta / normal;

    const offsetX = this.dX * velocityScale;
    const offsetY = this.dY * velocityScale / 2;

    this.posX += offsetX;
    this.posY += offsetY;



    if (this.posY < 0) this.posY = 0;
    // if (this.posY < 503) this.dY += 1;
    if (this.dY < 10) this.dY += 1;
    if (this.dX === 0 && this.posY > 500) this.frame = 0;
    if (this.posY > 502) this.posY = 504;
    // if (this.posY > 630) this.posY = 630;
  }
}

window.Plumber;

export default Plumber;