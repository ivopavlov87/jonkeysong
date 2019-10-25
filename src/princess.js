class Princess {
  constructor(game) {
    this.game = game;

    this.sprite = new Image();
    this.sprite.src = "../sprites.png";
  }

  draw(ctx) {
    // let sprite = new Image();
    // sprite.src = "../img/sprites.png";
    
    // debugger;

    const princess = {
      sX: 158,
      sY: 126,
      sW: 15,
      sH: 22,
      dX: 246,
      dY: 51,
      dW: 15,
      dH: 22
    }

    // sprite.onload = function () {
      // debugger;
      ctx.drawImage(this.sprite,
        princess.sX,
        princess.sY,
        princess.sW,
        princess.sH,
        princess.dX,
        princess.dY,
        princess.dW * 1.5,
        princess.dH * 1.5);
    // }
  }
}

export default Princess;