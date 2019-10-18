
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
    }
  }
}

export default JonkeySong;