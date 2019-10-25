
class JonkeySong{
  constructor(game){
    this.game = game;
    this.frame = 0

    this.sprite = new Image();
    this.sprite.src = "./sprites.png";
  }

  draw(ctx){

    const jonkeySong = {
      animation: [
        { sX: 58, sY: 152 },
        { sX: 9, sY: 152 },
        { sX: 158, sY: 152 },
        { sX: 254, sY: 152 },
        { sX: 202, sY: 152 }
      ],
      w: 45,
      h: 32,
      x: 100,
      y: 100,
    }
    if (this.frame > 4) {
      jonkeySong.w === 49;
      this.frame = 0;
    }
    if (this.frame === 1) jonkeySong.w = 40;
    if (this.frame === 2) jonkeySong.w = 40;
    if (this.frame === 3) jonkeySong.w = 45;
    if (this.frame === 4) jonkeySong.w = 49;

    let jSong = jonkeySong.animation[this.frame]

      ctx.drawImage(this.sprite, 
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

export default JonkeySong;