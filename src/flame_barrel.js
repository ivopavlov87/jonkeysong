class FlameBarrel {
  constructor(game) {
    this.game = game;
    this.frame = 0;
    this.dX = 456;
    this.dY = 491;

    this.sprite = new Image();
    this.sprite.src = "../sprites.png";
  }

  draw(ctx){
    // const sprite = new Image();
    // sprite.src = "../img/sprites.png";

    const flickerBarrel = {
      flickerAnimation: [
        { sX: 125, sY: 256 },
        { sX: 144, sY: 256 }
      ],
      x: this.dX,
      y: this.dY,
      w: 16,
      h: 24,

      frame: 0
    };

    let flicker = flickerBarrel.flickerAnimation[this.frame];

    // sprite.onload = function () {
      ctx.drawImage(this.sprite,
        flicker.sX,
        flicker.sY,
        flickerBarrel.w,
        flickerBarrel.h,
        flickerBarrel.x,
        flickerBarrel.y,
        flickerBarrel.w * 1.5,
        flickerBarrel.h * 1.5);
    // }

  }
}

export default FlameBarrel;