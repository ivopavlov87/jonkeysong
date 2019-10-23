/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/barrel.js":
/*!***********************!*\
  !*** ./src/barrel.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Barrel{
  constructor(game) {
    this.game = game;

    this.sprite = new Image();
    this.sprite.src = "../img/sprites.png";
  }

  draw(ctx) {
    // let sprite = new Image();
    // sprite.src = "../img/sprites.png";

    const barrel = {
      sX: 113,
      sY: 265,
      w: 10,
      h: 16,
      x: 80,
      y: 125
    }

    // sprite.onload = function(){
      // START OF BARREL SUPPLY
      ctx.drawImage(this.sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x,
        barrel.y,
        barrel.w * 1.5,
        barrel.h * 1.5);
      ctx.drawImage(this.sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x - 15,
        barrel.y,
        barrel.w * 1.5,
        barrel.h * 1.5);
      ctx.drawImage(this.sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x,
        barrel.y - 22,
        barrel.w * 1.5,
        barrel.h * 1.5);
      ctx.drawImage(this.sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x - 15,
        barrel.y - 22,
        barrel.w * 1.5,
        barrel.h * 1.5);
      // END OF BARREL SUPPLY
    // }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Barrel);

/***/ }),

/***/ "./src/flame_barrel.js":
/*!*****************************!*\
  !*** ./src/flame_barrel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class FlameBarrel {
  constructor(game) {
    this.game = game;
    this.frame = 0;
    this.dX = 456;
    this.dY = 491;

    this.sprite = new Image();
    this.sprite.src = "../img/sprites.png";
  }

  draw(ctx){
    // const sprite = new Image();
    // sprite.src = "../img/sprites.png";

    const flickerBarrel = {
      flickerAnimation: [
        { sX: 125, sY: 256 },
        { sX: 144, sY: 256 }
      ],
      x: this.dX,
      y: this.dY,
      w: 16,
      h: 24,

      frame: 0
    };

    let flicker = flickerBarrel.flickerAnimation[this.frame];

    // sprite.onload = function () {
      ctx.drawImage(this.sprite,
        flicker.sX,
        flicker.sY,
        flickerBarrel.w,
        flickerBarrel.h,
        flickerBarrel.x,
        flickerBarrel.y,
        flickerBarrel.w * 1.5,
        flickerBarrel.h * 1.5);
    // }

  }
}

/* harmony default export */ __webpack_exports__["default"] = (FlameBarrel);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jonkey_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jonkey_song */ "./src/jonkey_song.js");
/* harmony import */ var _barrel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barrel */ "./src/barrel.js");
/* harmony import */ var _level_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level_one */ "./src/level_one.js");
/* harmony import */ var _plumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plumber */ "./src/plumber.js");
/* harmony import */ var _flame_barrel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flame_barrel */ "./src/flame_barrel.js");
/* harmony import */ var _princess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./princess */ "./src/princess.js");







console.log("Webpack is working! game.js")

class Game {
  constructor() {
    this.width = 480;
    this.height = 640;
    this.scale = 1.5;
    this.gravity = 9;
    this.jonkeySong = new _jonkey_song__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    this.barrel = new _barrel__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.levelOne = new _level_one__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.plumber = new _plumber__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    this.flameBarrel = new _flame_barrel__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    this.princess = new _princess__WEBPACK_IMPORTED_MODULE_5__["default"](this);
    this.bgImg = new Image();
    this.bgImg.src = "../img/background-sprites.png";

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

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// console.log("game view is here!")
class GameView {
  constructor(game, ctx, canvas) {
    this.game = game;
    this.ctx = ctx;
    this.canvas = canvas;
    this.interval = "";
    this.rightKey = false;
    this.leftKey = false;
    this.spacebar = false;
    this.frameCount = 0;
    this.jumpHeight = 0;

    this.loop = this.loop.bind(this)
  }

  start() {
    this.bindKeyHandlers();

    this.game.draw(this.ctx);

    this.lastTime = 0;
    requestAnimationFrame(this.loop.bind(this));
    
  }


  loop(time){
    // console.log("inside the gameloop")
    const timeDelta = time - this.lastTime;
    this.frameCount += 1;

    if (this.frameCount > 50){ 
      this.game.jonkeySong.frame += 1;
      this.game.flameBarrel.frame += 1;
      this.frameCount = 0;
    }

    if (this.game.flameBarrel.frame > 1) this.game.flameBarrel.frame = 0;

    this.ctx.clearRect(0, 0, this.game.width, this.game.height);

    this.game.plumber.move(timeDelta);
    this.game.draw(this.ctx);

    this.lastTime = time
    requestAnimationFrame(this.loop.bind(this))
  }

  stop() {

  }

  gameOver() {

  }

  win() {

  }

  keyDownHandler(e) {
    if (e.key === "ArrowRight" || e.key === "d") {
      this.rightKey = true;
      // console.log("arrow-right down");
    } 
    
    if (e.key === "ArrowLeft" || e.key === "a") {
      this.leftKey = true
      // console.log("arrow-left down");
    }

    if (e.key === " "){
      this.spacebar = true;
    }

    if (this.leftKey) {
      this.game.plumber.dX = -3;
      this.game.plumber.direction = "left";
      this.game.plumber.frame += 1
    }
    if (this.rightKey) {
      this.game.plumber.dX = 3;
      this.game.plumber.direction = "right";
      this.game.plumber.frame += 1
    }

    if (this.game.plumber.canJump && this.game.plumber.onSurface && this.spacebar) {
        this.game.plumber.frame = 2;
        this.game.plumber.jumping = true;
        this.game.plumber.falling = false;
    }

  }

  keyUpHandler(e) {
    if (e.key === "ArrowRight" || e.key === "d") {
      this.game.plumber.direction = "right";
      this.rightKey = false;
      this.game.plumber.dX = 0;
    }
    
    if (e.key === "ArrowLeft" || e.key === "a") {
      this.game.plumber.direction = "left";
      this.leftKey = false;
      this.game.plumber.dX = 0;
    }

    if (e.key === " "){
      this.spacebar = false;
      this.game.plumber.jumping = false;
    }
  }

  bindKeyHandlers() {
    document.addEventListener("keydown", (e) => this.keyDownHandler(e), false);
    document.addEventListener("keyup", (e) => this.keyUpHandler(e), false);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ "./src/game_view.js");



document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
  canvas.width = 480;
  canvas.height = 640;

  
  console.log("This is inside the index.js file")

  
  new _game_view__WEBPACK_IMPORTED_MODULE_1__["default"](game, ctx, canvas).start();
})

/***/ }),

/***/ "./src/jonkey_song.js":
/*!****************************!*\
  !*** ./src/jonkey_song.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class JonkeySong{
  constructor(game){
    this.game = game;
    this.frame = 0

    this.sprite = new Image();
    this.sprite.src = "../img/sprites.png";
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

/* harmony default export */ __webpack_exports__["default"] = (JonkeySong);

/***/ }),

/***/ "./src/level_one.js":
/*!**************************!*\
  !*** ./src/level_one.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class LevelOne{
  constructor(game) {
    this.game = game;

    this.sprite = new Image();
    this.sprite.src = "../img/sprites.png";
  }

  draw(ctx){
    // let sprite = new Image();
    // sprite.src = "../img/sprites.png";

    const redSteel = {
      sX: 222,
      sY: 272,
      w: 16,
      h: 8,
      x: 65,
      y: 148
    }

    // sprite.onload = function() {
      // TOP FLOOR, PART 1
      let i;
      for (i = 0; i < 12; i++){
        ctx.drawImage(this.sprite,
        redSteel.sX,
        redSteel.sY,
        redSteel.w,
        redSteel.h,
        redSteel.x + (redSteel.w * 1.5)*i,
        redSteel.y,
        redSteel.w * 1.5,
        redSteel.h * 1.5);
      }

      // TOP FLOOR, PART 2
      let j;
      for (j = 1; j < 5; j++){
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w*1.5*(12+j-1)),
          redSteel.y + j,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // PENULTIMATE FLOOR
      let k;
      for (k = 1; k < 20; k++){
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w*1.5*(17.5 - k)),
          redSteel.y + 46 + k,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
        }

      // FIFTH FLOOR
      let l;
      for (l = 1; l < 20; l++){
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w*1.5*(17.3 - l)) - redSteel.w*1.5,
          redSteel.y + 128 - l,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // FOURTH FLOOR
      let m;
      for (m = 1; m < 20; m++){
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w * 1.5 * (17.4 - m)),
          redSteel.y + 172 + m,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // THIRD FLOOR
      let n;
      for (n = 1; n < 20; n++) {
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w * 1.5 * (17.3 - n)) - redSteel.w * 1.5,
          redSteel.y + 260 - n,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // SECOND FLOOR
      let o;
      for (o = 1; o < 20; o++) {
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w * 1.5 * (17.4 - o)),
          redSteel.y + 300 + o,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // FIRST FLOOR
      let p;
      for (p = 1; p < 20; p++) {
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w * 1.5 * (17.3 - p)) - redSteel.w * 1.5,
          redSteel.y + 380 - p,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      ctx.drawImage(this.sprite,
        redSteel.sX,
        redSteel.sY,
        redSteel.w,
        redSteel.h,
        456,
        527,
        redSteel.w * 1.5,
        redSteel.h * 1.5);

      // PRINCESS PLATFORM
      let q;
      for (q = 0; q < 3; q++) {
        ctx.drawImage(this.sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + 180 + (redSteel.w * 1.5) * q,
          redSteel.y - 64,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }
    // }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LevelOne);

/***/ }),

/***/ "./src/plumber.js":
/*!************************!*\
  !*** ./src/plumber.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class Plumber{
  constructor(game) {
    this.game = game;
    this.posX = 430;
    this.posY = 503;
    this.width = 14;
    this.height = 16;
    this.dX = 0;
    this.dY = 0; // was 9
    this.direction = "left"
    this.falling = false;
    this.jumping = false;
    this.canJump = true;
    this.jumpStart = 0;
    this.onSurface = true;
    this.frame = 0;

    this.sprite = new Image();
    this.sprite.src = "../img/sprites.png";
  }

  draw(ctx){
    // debugger;
    const plumberR = {
      walkRightAnimation: [
        { sX: 158, sY: 3 },
        { sX: 176, sY: 4 },
        { sX: 197, sY: 3 },
        { sX: 176, sY: 4 },
        { sX: 158, sY: 3 }
      ],
      x: this.posX,
      y: this.posY,
      w: this.width,
      h: this.height,
    }

    const plumberL = {
      walkLeftAnimation: [
        { sX: 136, sY: 3 },
        { sX: 115, sY: 4 },
        { sX: 94, sY: 3 },
        { sX: 115, sY: 4 },
        { sX: 136, sY: 3 }
      ],
      x: this.posX,
      y: this.posY,
      w: this.width,
      h: this.height,
    };

    let plumber = this.direction === "left" ? 
    plumberL.walkLeftAnimation[this.frame] 
    : plumberR.walkRightAnimation[this.frame];

    if (this.direction === "left"){
      ctx.drawImage(this.sprite,
        plumber.sX,
        plumber.sY,
        plumberL.w,
        plumberL.h,
        plumberL.x,
        plumberL.y,
        plumberL.w * this.game.scale,
        plumberL.h * this.game.scale
      );
    } else if (this.direction === "right") {
      ctx.drawImage(this.sprite,
        plumber.sX,
        plumber.sY,
        plumberR.w,
        plumberR.h,
        plumberR.x,
        plumberR.y,
        plumberR.w * this.game.scale,
        plumberR.h * this.game.scale
      );
    }

    const plumberWidth = this.width * this.game.scale;

    // UNIVERSAL TOP BOUNDRY
    if (this.posY < (this.height * this.game.scale)) {
      this.posY = (this.height * this.game.scale)
    };

    // UNIVERSAL LEFT BOUNDRY
    if (this.posX < 0) this.posX = 0;
    
    // UNIVERSAL RIGHT BOUNDRY
    if (this.posX > (this.game.width - plumberWidth)) {
      this.posX = (this.game.width - plumberWidth);
    };

    // GROUND BOUNDRY
    if (this.posY >= 503) {
      this.posY = 503;

      this.canJump = true;
      this.falling = false;
      this.onSurface = true;
    };
    
  }

  move(timeDelta){
    // debugger;
    if (this.frame > 4){
      this.frame = 0
    }

    if (this.onSurface) {
      this.dY = 0;
      this.falling = false;
      this.canJump = true;
    };

    if (this.jumping && this.canJump){
      this.dY = -5;
      this.falling = true;
      this.canJump = false;
      this.onSurface = false;
    }
    

    if (this.falling && !this.onSurface){
      this.dY += 0.3;
    }

    const normal = 1000 / 60
    const velocityScale = timeDelta / normal;
    

    const offsetX = this.dX * velocityScale;
    const offsetY = this.dY * velocityScale;

    this.posX += offsetX;
    this.posY += offsetY;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Plumber);

/***/ }),

/***/ "./src/princess.js":
/*!*************************!*\
  !*** ./src/princess.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Princess {
  constructor(game) {
    this.game = game;

    this.sprite = new Image();
    this.sprite.src = "../img/sprites.png";
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

/* harmony default export */ __webpack_exports__["default"] = (Princess);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map