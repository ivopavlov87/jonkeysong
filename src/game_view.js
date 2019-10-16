class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start() {
    let that = this;
    that.game.draw(that.ctx);
  }

  stop() {

  }

  gameOver() {

  }

  win() {

  }

  bindKeyHandlers() {

  }
}

export default GameView;