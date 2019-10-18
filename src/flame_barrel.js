class FlameBarrel {
  constructor(game) {
    this.game = game;
  }

  draw(ctx){
    const sprite = new Image();
    sprite.src = "../img/sprites.png";

    const flickerBarrel = {
      flickerAnimation: [
        { sX: 125, sY: 256 },
        { sX: 144, sY: 246 }
      ],
      x: 456,
      y: 491,
      w: 16,
      h: 24,

      frame: 0
    };

    let flicker = flickerBarrel.flickerAnimation[flickerBarrel.frame];

    sprite.onload = function () {
      ctx.drawImage(sprite,
        flicker.sX,
        flicker.sY,
        flickerBarrel.w,
        flickerBarrel.h,
        flickerBarrel.x,
        flickerBarrel.y,
        flickerBarrel.w * 1.5,
        flickerBarrel.h * 1.5);
    }

  }
}

export default FlameBarrel;