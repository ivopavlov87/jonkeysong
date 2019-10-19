
class JonkeySong{
  constructor(game){
    this.game = game;
    this.frame = 0

    this.sprite = new Image();
    this.sprite.src = "../img/sprites.png";
  }

  draw(ctx){
    // let sprite = new Image();
    // sprite.src = "../img/sprites.png";

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
    }

    // if (this.frame = 2) jonkeySong.animation.w = 43;

    let jSong = jonkeySong.animation[this.frame]

    // sprite.onload = function() {
      ctx.drawImage(this.sprite, 
        jSong.sX, 
        jSong.sY, 
        jonkeySong.w, 
        jonkeySong.h, 
        jonkeySong.x, 
        jonkeySong.y,
        jonkeySong.w * 1.5, 
        jonkeySong.h * 1.5);


      // if (this.frame > 4) this.frame = 0;
    // }
  }
}

export default JonkeySong;