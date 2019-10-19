class LevelOne{
  constructor(game) {
    this.game = game;

    this.sprite = new Image();
    this.sprite.src = "../img/sprites.png";
  }

  draw(ctx){
    // let sprite = new Image();
    // sprite.src = "../img/sprites.png";

    const redSteel = {
      sX: 222,
      sY: 272,
      w: 16,
      h: 8,
      x: 65,
      y: 148
    }

    // sprite.onload = function() {
      // TOP FLOOR, PART 1
      let i;
      for (i = 0; i < 12; i++){
        ctx.drawImage(this.sprite,
        redSteel.sX,
        redSteel.sY,
        redSteel.w,
        redSteel.h,
        redSteel.x + (redSteel.w * 1.5)*i,
        redSteel.y,
        redSteel.w * 1.5,
        redSteel.h * 1.5);
      }

      // TOP FLOOR, PART 2
      let j;
      for (j = 1; j < 5; j++){
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w*1.5*(12+j-1)),
          redSteel.y + j,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // PENULTIMATE FLOOR
      let k;
      for (k = 1; k < 20; k++){
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w*1.5*(17.5 - k)),
          redSteel.y + 46 + k,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
        }

      // FIFTH FLOOR
      let l;
      for (l = 1; l < 20; l++){
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w*1.5*(17.3 - l)) - redSteel.w*1.5,
          redSteel.y + 128 - l,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // FOURTH FLOOR
      let m;
      for (m = 1; m < 20; m++){
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w * 1.5 * (17.4 - m)),
          redSteel.y + 172 + m,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // THIRD FLOOR
      let n;
      for (n = 1; n < 20; n++) {
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w * 1.5 * (17.3 - n)) - redSteel.w * 1.5,
          redSteel.y + 260 - n,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // SECOND FLOOR
      let o;
      for (o = 1; o < 20; o++) {
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w * 1.5 * (17.4 - o)),
          redSteel.y + 300 + o,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // FIRST FLOOR
      let p;
      for (p = 1; p < 20; p++) {
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w * 1.5 * (17.3 - p)) - redSteel.w * 1.5,
          redSteel.y + 380 - p,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      ctx.drawImage(this.sprite,
        redSteel.sX,
        redSteel.sY,
        redSteel.w,
        redSteel.h,
        456,
        527,
        redSteel.w * 1.5,
        redSteel.h * 1.5);

      // PRINCESS PLATFORM
      let q;
      for (q = 0; q < 3; q++) {
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + 180 + (redSteel.w * 1.5) * q,
          redSteel.y - 64,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }
    // }
  }
}

export default LevelOne;