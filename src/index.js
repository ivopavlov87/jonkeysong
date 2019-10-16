import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  const game = new Game();
  canvas.width = 480;
  canvas.height = 640;

  
  console.log("This is inside the index.js file")

  new GameView(game, ctx).start();
})