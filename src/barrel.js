class Barrel{
  constructor(game) {
    this.game = game;

    this.sprite = new Image();
    this.sprite.src = "../img/sprites.png";
  }

  draw(ctx) {
    // let sprite = new Image();
    // sprite.src = "../img/sprites.png";

    const barrel = {
      sX: 113,
      sY: 265,
      w: 10,
      h: 16,
      x: 80,
      y: 125
    }

    // sprite.onload = function(){
      // START OF BARREL SUPPLY
      ctx.drawImage(this.sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x,
        barrel.y,
        barrel.w * 1.5,
        barrel.h * 1.5);
      ctx.drawImage(this.sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x - 15,
        barrel.y,
        barrel.w * 1.5,
        barrel.h * 1.5);
      ctx.drawImage(this.sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x,
        barrel.y - 22,
        barrel.w * 1.5,
        barrel.h * 1.5);
      ctx.drawImage(this.sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x - 15,
        barrel.y - 22,
        barrel.w * 1.5,
        barrel.h * 1.5);
      // END OF BARREL SUPPLY
    // }
  }
}

export default Barrel;