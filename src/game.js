console.log("Webpack is working! game.js")

class Game {
  constructor() {
    this.width = 480;
    this.height = 640;
  }

  drawBackground(ctx) {
    // "#70c5ce"; - SKY COLOR
    // "#86E18D"; - BRUSH COLOR

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
    this.drawBackground(ctx);
  }
}

export default Game;