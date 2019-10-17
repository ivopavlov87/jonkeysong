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
  }

  draw(ctx) {
    let sprite = new Image();
    sprite.src = "../img/sprites.png";

    const barrel = {
      sX: 113,
      sY: 265,
      w: 10,
      h: 16,
      x: 80,
      y: 125
    }

    sprite.onload = function(){
      // START OF BARREL SUPPLY
      ctx.drawImage(sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x,
        barrel.y,
        barrel.w * 1.5,
        barrel.h * 1.5);
      ctx.drawImage(sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x - 15,
        barrel.y,
        barrel.w * 1.5,
        barrel.h * 1.5);
      ctx.drawImage(sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x,
        barrel.y - 22,
        barrel.w * 1.5,
        barrel.h * 1.5);
      ctx.drawImage(sprite,
        barrel.sX,
        barrel.sY,
        barrel.w,
        barrel.h,
        barrel.x - 15,
        barrel.y - 22,
        barrel.w * 1.5,
        barrel.h * 1.5);
      // END OF BARREL SUPPLY
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Barrel);

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




console.log("Webpack is working! game.js")

class Game {
  constructor() {
    this.width = 480;
    this.height = 640;
    this.jonkeySong = new _jonkey_song__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    this.barrel = new _barrel__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.levelOne = new _level_one__WEBPACK_IMPORTED_MODULE_2__["default"](this);
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
    this.jonkeySong.draw(ctx);
    this.barrel.draw(ctx);
    this.levelOne.draw(ctx);
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

  new _game_view__WEBPACK_IMPORTED_MODULE_1__["default"](game, ctx).start();
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

    // const barrel = {
    //   sX: 113,
    //   sY: 265,
    //   w: 10,
    //   h: 16,
    //   x: 80,
    //   y: 125
    // }

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

      // ctx.drawImage(sprite,
      //   barrel.sX,
      //   barrel.sY,
      //   barrel.w,
      //   barrel.h,
      //   barrel.x,
      //   barrel.y,
      //   barrel.w * 1.5,
      //   barrel.h * 1.5);

      // ctx.drawImage(sprite,
      //   barrel.sX,
      //   barrel.sY,
      //   barrel.w,
      //   barrel.h,
      //   barrel.x - 15,
      //   barrel.y,
      //   barrel.w * 1.5,
      //   barrel.h * 1.5);
      // ctx.drawImage(sprite,
      //   barrel.sX,
      //   barrel.sY,
      //   barrel.w,
      //   barrel.h,
      //   barrel.x,
      //   barrel.y - 22,
      //   barrel.w * 1.5,
      //   barrel.h * 1.5);
      // ctx.drawImage(sprite,
      //   barrel.sX,
      //   barrel.sY,
      //   barrel.w,
      //   barrel.h,
      //   barrel.x - 15,
      //   barrel.y - 22,
      //   barrel.w * 1.5,
      //   barrel.h * 1.5);
    }
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
  }

  draw(ctx){
    let sprite = new Image();
    sprite.src = "../img/sprites.png";

    const redSteel = {
      sX: 222,
      sY: 272,
      w: 16,
      h: 8,
      x: 65,
      y: 148
    }

    sprite.onload = function() {
      // TOP FLOOR, PART 1
      let i;
      for (i = 0; i < 12; i++){
        ctx.drawImage(sprite,
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
        ctx.drawImage(sprite,
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
        ctx.drawImage(sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w*1.5*(17.5 - k)),
          redSteel.y + 46 + k,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
        }

      // FOURTH FLOOR
      let l;
      for (l = 1; l < 20; l++){
        ctx.drawImage(sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w*1.5*(17.3 - l)) - redSteel.w*1.5,
          redSteel.y + 128 - l,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // THIRD FLOOR
      let m;
      for (m = 1; m < 20; m++){
        ctx.drawImage(sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w * 1.5 * (17.4 - m)),
          redSteel.y + 172 + m,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // SECOND FLOOR
      let n;
      for (n = 1; n < 20; n++) {
        ctx.drawImage(sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w * 1.5 * (17.3 - n)) - redSteel.w * 1.5,
          redSteel.y + 260 - n,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // THIRD FLOOR
      let o;
      for (o = 1; o < 20; o++) {
        ctx.drawImage(sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w * 1.5 * (17.4 - o)),
          redSteel.y + 300 + o,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      // THIRD FLOOR
      let p;
      for (p = 1; p < 20; p++) {
        ctx.drawImage(sprite,
          redSteel.sX,
          redSteel.sY,
          redSteel.w,
          redSteel.h,
          redSteel.x + (redSteel.w * 1.5 * (17.3 - p)) - redSteel.w * 1.5,
          redSteel.y + 380 - p,
          redSteel.w * 1.5,
          redSteel.h * 1.5);
      }

      ctx.drawImage(sprite,
        redSteel.sX,
        redSteel.sY,
        redSteel.w,
        redSteel.h,
        456,
        527,
        redSteel.w * 1.5,
        redSteel.h * 1.5);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LevelOne);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map