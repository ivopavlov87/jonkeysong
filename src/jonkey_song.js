
class JonkeySong{
  constructor(game){
    this.game = game;
  }

  draw(ctx){
    let sprite = new Image();
    sprite.src = "../img/sprites.png";

    const jonkeySong = {
      animation: [
        { sX: 58, sY: 152 },
        { sX: 9, sY: 152 },
        // { sX: 158, sY: 152 },
        { sX: 158, sY: 152 },
        { sX: 254, sY: 152 },
        { sX: 202, sY: 152 }
      ],
      w: 45,
      h: 32,
      x: 100,
      y: 100,

      frame: 0,
    }

    const barrel = {
      sX: 113,
      sY: 265,
      w: 10,
      h: 16,
      x: 80,
      y: 125
    }

    let jSong = jonkeySong.animation[jonkeySong.frame]

    sprite.onload = function() {
      ctx.drawImage(sprite, 
        jSong.sX, 
        jSong.sY, 
        jonkeySong.w, 
        jonkeySong.h, 
        jonkeySong.x, 
        jonkeySong.y,
        jonkeySong.w * 1.5, 
        jonkeySong.h * 1.5);

      ctx.drawImage(sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x,
        barrel.y,
        barrel.w * 1.5,
        barrel.h * 1.5);

      ctx.drawImage(sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x - 15,
        barrel.y,
        barrel.w * 1.5,
        barrel.h * 1.5);
      ctx.drawImage(sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x,
        barrel.y - 22,
        barrel.w * 1.5,
        barrel.h * 1.5);
      ctx.drawImage(sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x - 15,
        barrel.y - 22,
        barrel.w * 1.5,
        barrel.h * 1.5);
    }
  }
}

export default JonkeySong;