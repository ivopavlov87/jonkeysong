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
    this.scale = 1.5;
    this.gravity = 9;
    this.jonkeySong = new JonkeySong(this);
    this.barrel = new Barrel(this);
    this.levelOne = new LevelOne(this);
    this.plumber = new Plumber(this);
    this.flameBarrel = new FlameBarrel(this);
    this.princess = new Princess(this);
    this.bgImg = new Image();
    this.bgImg.src = "./img/background-sprites.png";
  }

  drawBackground(ctx) {
    // "#70c5ce"; - SKY COLOR
    // "#86E18D"; - BRUSH COLOR

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

    //  BUILDINGS, CLOUDS, AND BRUSH
    ctx.drawImage(this.bgImg, bg.sX, bg.sY, bg.w, bg.h, bg.x, bg.y,
    bg.w, bg.h);

    ctx.drawImage(this.bgImg, bg.sX, bg.sY, bg.w, bg.h, bg.x + bg.w, bg.y, bg.w, bg.h);

    // FOREGROUND
    ctx.drawImage(this.bgImg, fg.sX, fg.sY, fg.w, fg.h, fg.x, fg.y,
      fg.w, fg.h);

    ctx.drawImage(this.bgImg, fg.sX, fg.sY, fg.w, fg.h, fg.x + fg.w, fg.y, fg.w, fg.h)
    ctx.drawImage(this.bgImg, fg.sX, fg.sY, fg.w, fg.h, fg.x + fg.w * 2, fg.y, fg.w, fg.h)
  }

  draw(ctx) {
    // ctx.clearRect(0, 0, this.width, this.height);
    // console.log("this is the game draw")
    this.drawBackground(ctx);
    this.jonkeySong.draw(ctx);
    this.flameBarrel.draw(ctx);
    this.plumber.draw(ctx);
    this.barrel.draw(ctx);
    this.levelOne.draw(ctx);
    this.princess.draw(ctx);
  }
}

export default Game;