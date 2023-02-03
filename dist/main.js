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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass gameBoard {\n  constructor() {\n    this.gameBoardArray = this.createGameBoard();\n    this.missedAttacks = [];\n    this.ships = [];\n  }\n  createGameBoard() {\n    let array = [];\n    let arrayItem = [];\n    let row = 1;\n    for (let i = 1; i < 11; i++) {\n      let col = 1;\n      for (let j = 1; j < 11; j++) {\n        arrayItem.push({\n          row: row,\n          col: col++,\n          shipName: undefined,\n          shipIndex: undefined,\n        });\n      }\n      row++;\n      array.push(arrayItem);\n      arrayItem = [];\n    }\n    return array;\n  }\n\n  getGameBoard() {\n    return this.gameBoardArray;\n  }\n\n  checkValidMove(x, y, length) {\n    if (x < 1 || x + length > 10 || y < 1 || y > 10) {\n      return false;\n    } else if (this.gameBoardArray[x - 1][y - 1].shipName !== undefined) {\n      return false;\n    } else return true;\n  }\n\n  placeShip(x, y, ship) {\n    if (this.checkValidMove(x, y, ship.length) === false) {\n      return false;\n    }\n    this.ships.push(ship);\n    let shipPlaces = [];\n\n    // Find correct object in gameBoardArray\n    this.gameBoardArray[x - 1][y - 1].shipName = ship.name;\n\n    //Push new objects to return array\n    shipPlaces.push(this.gameBoardArray[x - 1][y - 1]);\n\n    // console.log(this.gameBoardArray[x - 1][y - 1]);\n    // console.log(this.gameBoardArray[x - 1 + 1][y - 1]);\n    // console.log(this.gameBoardArray[x - 1 + 2][y - 1]);\n\n    // Repeat if ship length is > 1;\n    if (ship.length > 1) {\n      for (let i = 1; i < ship.length; i++) {\n        this.gameBoardArray[x - 1 + [i][0]][y - 1].shipName = ship.name;\n        shipPlaces.push(this.gameBoardArray[x - 1][y - 1]);\n      }\n    }\n    return shipPlaces;\n  }\n\n  // placeShip(x, y, ship) {\n  //   if (this.checkValidMove(x, y, ship.length) === false) {\n  //     return false;\n  //   }\n  //   this.ships.push(ship);\n  //   let shipPlaces = []; b\n\n  //   // Find correct object in gameBoardArray\n  //   const row = this.gameBoardArray.at(x - 1);\n  //   const column = row.at(y - 1);\n  //   const index = this.gameBoardArray.indexOf(column);\n  //   column.shipName = ship.name;\n\n  //   // Reassign gameBoardArray object\n  //   this.gameBoardArray[index] = column;\n\n  //   //Push new objects to return array\n  //   shipPlaces.push(this.gameBoardArray[index]);\n\n  //   // Repeat if ship length is > 1;\n  //   if (ship.length > 1) {\n  //     for (let i = 1; i < ship.length; i++) {\n  //       const row = this.gameBoardArray.at(x - 1 + [i]);\n  //       const column = row.at(y - 1);\n  //       const index = this.gameBoardArray.indexOf(column);\n  //       column.shipName = ship.name;\n  //       this.gameBoardArray[index] = column;\n  //       shipPlaces.push(this.gameBoardArray[index]);\n  //     }\n  //   }\n  //   return shipPlaces;\n  // }\n\n  receiveAttack(x, y) {\n    // If there is ship at coord, run hit function on ship\n    if (this.gameBoardArray[x - 1][y - 1].shipName !== undefined) {\n      let returnShip;\n      this.ships.forEach((ship) => {\n        if (ship.name === this.gameBoardArray[x - 1][y - 1].shipName) {\n          ship.hit();\n          returnShip = ship;\n        }\n      });\n      return returnShip.hits;\n      // Else add missed shot to missed attacks array;\n    } else if (this.gameBoardArray[x - 1][y - 1].shipName === undefined) {\n      this.missedAttacks.push(this.gameBoardArray[x - 1][y - 1]);\n      return \"Miss!\";\n    }\n  }\n\n  getMissedAttacks() {\n    // return this.missedAttacks;\n    let missedAttacks = [];\n    this.missedAttacks.forEach((miss) => {\n      const coord = { row: miss.row[0], col: miss.col };\n      missedAttacks.push(coord);\n    });\n    return missedAttacks;\n  }\n\n  allShipsSunk() {\n    let arr = [];\n    this.ships.forEach((ship) => {\n      if (ship.sunk === true) {\n        arr.push(ship);\n      }\n    });\n    if (this.ships.length === arr.length) {\n      return true;\n    } else return false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n// import createPlayer from \"./player\";\n\n\nfunction playGame() {\n  // define all main variables\n  // const player = new createPlayer(\"Joey\");\n  // const computer = new createPlayer(\"Computer\");\n  const carrier = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](5, \"Carrier\");\n  const battleship = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](4, \"Battleship\");\n  const cruiser = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3, \"Cruiser\");\n  const submarine = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3, \"Submarine\");\n  const destroyer = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2, \"Destroyer\");\n  const playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const compBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  //place ships on both boards\n  playerBoard.placeShip(2, 4, carrier);\n  playerBoard.placeShip(1, 2, battleship);\n  playerBoard.placeShip(3, 2, cruiser);\n  playerBoard.placeShip(1, 1, submarine);\n  playerBoard.placeShip(1, 9, destroyer);\n\n  compBoard.placeShip(2, 4, carrier);\n  compBoard.placeShip(1, 2, battleship);\n  compBoard.placeShip(5, 5, cruiser);\n  compBoard.placeShip(5, 9, submarine);\n  compBoard.placeShip(1, 1, destroyer);\n}\n\nplayGame();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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