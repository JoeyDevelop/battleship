import Ship from "./ship";

class gameBoard {
  constructor() {
    this.gameBoardArray = this.createGameBoard();
    this.missedAttacks = [];
  }
  createGameBoard() {
    let array = [];
    let arrayItem = [];
    for (let i = 1; i < 11; i++) {
      let col = 1;
      for (let j = 1; j < 11; j++) {
        arrayItem.push({
          row: [i],
          col: col++,
          shipName: undefined,
          shipIndex: undefined,
        });
      }
      array.push(arrayItem);
      arrayItem = [];
    }
    return array;
  }
  getGameBoard() {
    return this.gameBoardArray;
  }
  checkValidMove(x, y, length) {
    if (x < 1 || x > 10 || y < 1 || y + length > 10) {
      return false;
    } else {
      return true;
    }
  }
  // This method is not finished
  placeShip(x, y, ship) {
    if (this.checkValidMove(x, y, ship.length) === false) {
      return false;
    }
    const row = this.gameBoardArray.at(x - 1);
    const column = row.at(y - 1);
    return column;
  }
}

const carrier = new Ship(5, "Carrier");
const playerBoard = new gameBoard();
playerBoard.placeShip(1, 1, carrier);

export default playerBoard;
