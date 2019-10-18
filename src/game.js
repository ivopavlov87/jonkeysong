import JonkeySong from "./jonkey_song";
import Barrel from "./barrel";
import LevelOne from "./level_one";
import Plumber from "./plumber";
import FlameBarrel from "./flame_barrel";
import Princess from "./princess";

console.log("Webpack is working! game.js")

class Game {
  constructor() {
    this.width = 480;
    this.height = 640;
    this.jonkeySong = new JonkeySong(this);
    this.barrel = new Barrel(this);
    this.levelOne = new LevelOne(this);
    this.plumber = new Plumber(this);
    this.flameBarrel = new FlameBarrel(this);
    this.princess = new Princess(this);
  }

  drawBackground(ctx) {
    // "#70c5ce"; - SKY COLOR
    // "#86E18D"; - BRUSH COLOR

    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.width, this.height);

    // IMG SOURCE FOR BACKGROUND
    let bgImg = new Image();
    bgImg.src = "../img/background-sprites.png";

    // SLICING OUT BUILDINGS, CLOUDS, AND BRUSH
    const bg = {
      sX: 0,
      sY: 0,
      w: 275,
      h: 226,
      x: 0,
      y: this.height - 306
    }

    // SLICING OUT WALKING PATH
    const fg = {
      sX: 276,
      sY: 0,
      w: 224,
      h: 112,
      x: 0,
      y: this.height - 112
    }

    bgImg.onload = function(){
      //  BUILDINGS, CLOUDS, AND BRUSH
      ctx.drawImage(bgImg, bg.sX, bg.sY, bg.w, bg.h, bg.x, bg.y,
      bg.w, bg.h);

      ctx.drawImage(bgImg, bg.sX, bg.sY, bg.w, bg.h, bg.x + bg.w, bg.y, bg.w, bg.h);

      // FOREGROUND
      ctx.drawImage(bgImg, fg.sX, fg.sY, fg.w, fg.h, fg.x, fg.y,
        fg.w, fg.h);

      ctx.drawImage(bgImg, fg.sX, fg.sY, fg.w, fg.h, fg.x + fg.w, fg.y, fg.w, fg.h)
      ctx.drawImage(bgImg, fg.sX, fg.sY, fg.w, fg.h, fg.x + fg.w * 2, fg.y, fg.w, fg.h)
    }
  }

  draw(ctx) {
    // ctx.clearRect(0, 0, this.width, this.height);
    this.drawBackground(ctx);
    this.jonkeySong.draw(ctx);
    this.barrel.draw(ctx);
    this.levelOne.draw(ctx);
    this.plumber.draw(ctx);
    this.flameBarrel.draw(ctx);
    this.princess.draw(ctx);
  }
}

export default Game;