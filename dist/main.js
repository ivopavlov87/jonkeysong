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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jonkey_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jonkey_song */ "./src/jonkey_song.js");


console.log("Webpack is working! game.js")

class Game {
  constructor() {
    this.width = 480;
    this.height = 640;
    this.jonkeysong = new _jonkey_song__WEBPACK_IMPORTED_MODULE_0__["default"](this);
  }

  drawBackground(ctx) {
    // "#70c5ce"; - SKY COLOR
    // "#86E18D"; - BRUSH COLOR

    // IMG SOURCE FOR BACKGROUND
    let bgImg = new Image();
    bgImg.src = "../img/background-sprites.png";

    // let sprite = new Image();
    // sprite.src = "../img/sprites.png";

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
    this.jonkeysong.draw(ctx);
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

    const barrel = {
      sX: 113,
      sY: 265,
      w: 10,
      h: 16,
      x: 80,
      y: 125
    }

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
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (JonkeySong);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map