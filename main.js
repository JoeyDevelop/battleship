/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Dom {\n  constructor() {\n    this.playerTiles = [];\n    this.compTiles = [];\n  }\n  // Setup boards\n  addTiles(playerArr, compArr) {\n    const compBoard = document.querySelector(\".compboard\");\n    const playerBoard = document.querySelector(\".playerboard\");\n\n    playerArr.forEach((element) => {\n      element.forEach((element) => {\n        const tile = document.createElement(\"div\");\n        tile.classList.add(\"tile\");\n        tile.setAttribute(\"row\", element.col);\n        tile.setAttribute(\"col\", element.row);\n        playerBoard.appendChild(tile);\n        this.playerTiles.push(tile);\n      });\n    });\n\n    compArr.forEach((element) => {\n      element.forEach((element) => {\n        const tile = document.createElement(\"div\");\n        tile.classList.add(\"tile\");\n        tile.setAttribute(\"col\", element.row);\n        tile.setAttribute(\"row\", element.col);\n        compBoard.appendChild(tile);\n        this.compTiles.push(tile);\n      });\n    });\n  }\n\n  addShips(playerArr, compArr) {\n    //Add ship name to tiles, show ships\n    playerArr.forEach((element) => {\n      element.forEach((element) => {\n        if (element.shipName !== undefined) {\n          const elRow = element.row;\n          const elCol = element.col;\n          // console.log(element.shipName);\n\n          this.playerTiles.forEach((tile) => {\n            const row = tile.getAttribute(\"col\");\n            const col = tile.getAttribute(\"row\");\n            if (row == elRow && col == elCol) {\n              tile.setAttribute(\"shipName\", element.shipName);\n              tile.classList.add(\"ship\");\n              // console.log(tile);\n            }\n          });\n        }\n      });\n    });\n\n    //Add ship name to tiles, show ships\n    compArr.forEach((element) => {\n      element.forEach((element) => {\n        if (element.shipName !== undefined) {\n          const elRow = element.row;\n          const elCol = element.col;\n          // console.log(element.shipName);\n\n          this.compTiles.forEach((tile) => {\n            const row = tile.getAttribute(\"col\");\n            const col = tile.getAttribute(\"row\");\n            if (row == elRow && col == elCol) {\n              tile.setAttribute(\"shipName\", element.shipName);\n              // These ships will not be shown in final product\n              // tile.classList.add(\"ship\");\n              // console.log(tile);\n            }\n          });\n        }\n      });\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass gameBoard {\n  constructor() {\n    this.gameBoardArray = this.createGameBoard();\n    this.missedAttacks = [];\n    this.hitAttacks = [];\n    this.ships = [];\n  }\n  createGameBoard() {\n    let array = [];\n    let arrayItem = [];\n    let row = 1;\n    for (let i = 1; i < 11; i++) {\n      let col = 1;\n      for (let j = 1; j < 11; j++) {\n        arrayItem.push({\n          row: row,\n          col: col++,\n          shipName: undefined,\n          shipIndex: undefined,\n        });\n      }\n      row++;\n      array.push(arrayItem);\n      arrayItem = [];\n    }\n    return array;\n  }\n\n  getGameBoard() {\n    return this.gameBoardArray;\n  }\n\n  checkValidMove(x, y, length) {\n    if (x < 1 || x + length > 11 || y < 1 || y > 10) {\n      return false;\n    } else if (this.gameBoardArray[x - 1][y - 1].shipName !== undefined) {\n      return false;\n    } else return true;\n  }\n\n  placeShip(x, y, ship) {\n    if (this.checkValidMove(x, y, ship.length) === false) {\n      return false;\n    }\n    this.ships.push(ship);\n    let shipPlaces = [];\n\n    // Reassign gameBoard shipName\n    this.gameBoardArray[x - 1][y - 1].shipName = ship.name;\n\n    //Push new objects to return array\n    shipPlaces.push(this.gameBoardArray[x - 1][y - 1]);\n\n    // Repeat if ship length is > 1;\n    if (ship.length > 1) {\n      for (let i = 1; i < ship.length; i++) {\n        this.gameBoardArray[x - 1 + [i][0]][y - 1].shipName = ship.name;\n        shipPlaces.push(this.gameBoardArray[x - 1][y - 1]);\n      }\n    }\n    return shipPlaces;\n  }\n\n  checkValidAttack(x, y) {\n    // Checks that attack hasn't already been used\n    if (\n      this.hitAttacks.includes(this.gameBoardArray[x - 1][y - 1]) == true ||\n      this.missedAttacks.includes(this.gameBoardArray[x - 1][y - 1]) == true\n    ) {\n      return true;\n    }\n  }\n\n  receiveAttack(x, y) {\n    if (this.checkValidAttack(x, y) === true) {\n      return \"fail\";\n    }\n    // If there is ship at coord, run hit function on ship\n    if (this.gameBoardArray[x - 1][y - 1].shipName !== undefined) {\n      this.ships.forEach((ship) => {\n        if (ship.name === this.gameBoardArray[x - 1][y - 1].shipName) {\n          ship.hit();\n          // This logs to console if all ship parts are hit\n          if (ship.sunk === true) {\n            alert(\"Ship sunk!\");\n          }\n          this.hitAttacks.push(this.gameBoardArray[x - 1][y - 1]);\n        }\n      });\n      console.log(this.hitAttacks);\n      return true;\n      // Else add missed shot to missed attacks array;\n    } else if (this.gameBoardArray[x - 1][y - 1].shipName === undefined) {\n      this.missedAttacks.push(this.gameBoardArray[x - 1][y - 1]);\n      console.log(this.missedAttacks);\n      return false;\n    }\n  }\n\n  getMissedAttacks() {\n    // return this.missedAttacks;\n    let missedAttacks = [];\n    this.missedAttacks.forEach((miss) => {\n      const coord = { row: miss.row[0], col: miss.col };\n      missedAttacks.push(coord);\n    });\n    return missedAttacks;\n  }\n\n  allShipsSunk() {\n    let arr = [];\n    this.ships.forEach((ship) => {\n      if (ship.sunk === true) {\n        arr.push(ship);\n      }\n    });\n    if (this.ships.length === arr.length) {\n      return true;\n    } else return false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n\nfunction playGame() {\n  // define all main variables\n\n  let playerName = document.querySelector(\".name\");\n  // Prompt for player name\n  playerName.innerHTML = prompt(\"Enter player name\");\n  const computer = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Computer\");\n  const carrier = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](5, \"Carrier\");\n  const battleship = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4, \"Battleship\");\n  const cruiser = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3, \"Cruiser\");\n  const submarine = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3, \"Submarine\");\n  const destroyer = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2, \"Destroyer\");\n  const carrier2 = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](5, \"Carrier\");\n  const battleship2 = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4, \"Battleship\");\n  const cruiser2 = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3, \"Cruiser\");\n  const submarine2 = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3, \"Submarine\");\n  const destroyer2 = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2, \"Destroyer\");\n  const playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const compBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const dom = new _dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n  //place ships on both boards\n  playerBoard.placeShip(2, 4, carrier);\n  playerBoard.placeShip(7, 7, battleship);\n  playerBoard.placeShip(7, 10, cruiser);\n  playerBoard.placeShip(1, 1, submarine);\n  playerBoard.placeShip(2, 9, destroyer);\n\n  compBoard.placeShip(4, 5, carrier2);\n  compBoard.placeShip(1, 2, battleship2);\n  compBoard.placeShip(5, 8, cruiser2);\n  compBoard.placeShip(8, 1, submarine2);\n  compBoard.placeShip(1, 10, destroyer2);\n\n  dom.addTiles(playerBoard.getGameBoard(), compBoard.getGameBoard());\n  dom.addShips(playerBoard.getGameBoard(), compBoard.getGameBoard());\n\n  dom.compTiles.forEach((tile) => {\n    tile.addEventListener(\"click\", () => {\n      round(tile.getAttribute(\"col\"), tile.getAttribute(\"row\"));\n    });\n  });\n\n  function round(row, col) {\n    // Player attack\n    const attack = compBoard.receiveAttack(row, col);\n    if (attack == true) {\n      dom.compTiles.forEach((tile) => {\n        if (\n          tile.getAttribute(\"col\") == row &&\n          tile.getAttribute(\"row\") == col\n        ) {\n          tile.classList.add(\"hit\");\n          tile.classList.remove(\"ship\");\n        }\n      });\n    } else if (attack == false) {\n      dom.compTiles.forEach((tile) => {\n        if (\n          tile.getAttribute(\"col\") == row &&\n          tile.getAttribute(\"row\") == col\n        ) {\n          tile.classList.add(\"miss\");\n        }\n      });\n    } else if (attack === \"fail\") {\n      alert(\"You have already attacked this spot! Please try again.\");\n      return;\n    }\n\n    // Computer attack\n    let compHit = false;\n    // if attack hits same location again, loop\n    while (compHit === false) {\n      let compRow = computer.makeRandomAttack();\n      let compCol = computer.makeRandomAttack();\n      const compAttack = playerBoard.receiveAttack(compRow, compCol);\n      if (compAttack == true) {\n        dom.playerTiles.forEach((tile) => {\n          if (\n            tile.getAttribute(\"col\") == compRow &&\n            tile.getAttribute(\"row\") == compCol\n          ) {\n            tile.classList.add(\"hit\");\n            tile.classList.remove(\"ship\");\n            compHit = true;\n          }\n        });\n      } else if (compAttack == false) {\n        dom.playerTiles.forEach((tile) => {\n          if (\n            tile.getAttribute(\"col\") == compRow &&\n            tile.getAttribute(\"row\") == compCol\n          ) {\n            tile.classList.add(\"miss\");\n            tile.classList.remove(\"ship\");\n            compHit = true;\n          }\n        });\n      }\n    }\n\n    //end loop if player or computer wins (comp not implemented)\n    if (compBoard.allShipsSunk() === true) {\n      console.log(compBoard.ships);\n      alert(\"You win!\");\n    } else if (playerBoard.allShipsSunk() === true) {\n      alert(\"Computer wins!\");\n    }\n  }\n}\n\nplayGame();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createPlayer(name) {\n  return {\n    name: name,\n    //computer methods\n    makeRandomAttack() {\n      const m = Math.floor(Math.random() * 10 + 1);\n      console.log(m);\n      return m;\n    },\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(length, name) {\n  return {\n    name: name,\n    length: length,\n    hits: 0,\n    sunk: false,\n    hit() {\n      this.hits++;\n      this.isSunk();\n    },\n    isSunk() {\n      if (this.hits === length) {\n        this.sunk = true;\n      }\n    },\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;