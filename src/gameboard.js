class gameBoard {
  constructor() {
    this.gameBoardArray = this.createGameBoard();
    this.missedAttacks = [];
    this.ships = [];
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

  placeShip(x, y, ship) {
    if (this.checkValidMove(x, y, ship.length) === false) {
      return false;
    }
    this.ships.push(ship);
    let shipPlaces = [];

    // Find correct object in gameBoardArray
    const row = this.gameBoardArray.at(x - 1);
    const column = row.at(y - 1);
    const index = this.gameBoardArray.indexOf(column);
    column.shipName = ship.name;

    // Reassign gameBoardArray object
    this.gameBoardArray[index] = column;

    //Push new objects to return array
    shipPlaces.push(this.gameBoardArray[index]);

    // Repeat if ship length is > 1;
    if (ship.length > 1) {
      for (let i = 1; i < ship.length; i++) {
        const row = this.gameBoardArray.at(x - 1 + [i]);
        const column = row.at(y - 1);
        const index = this.gameBoardArray.indexOf(column);
        column.shipName = ship.name;
        this.gameBoardArray[index] = column;
        shipPlaces.push(this.gameBoardArray[index]);
      }
    }
    return shipPlaces;
  }

  receiveAttack(x, y) {
    // If there is ship at coord, run hit function on ship
    if (this.gameBoardArray[x - 1][y - 1].shipName !== undefined) {
      let returnShip;
      this.ships.forEach((ship) => {
        if (ship.name === this.gameBoardArray[x - 1][y - 1].shipName) {
          ship.hit();
          returnShip = ship;
        }
      });
      return returnShip.hits;
      // Else add missed shot to missed attacks array;
    } else if (this.gameBoardArray[x - 1][y - 1].shipName === undefined) {
      this.missedAttacks.push(this.gameBoardArray[x - 1][y - 1]);
      return "Miss!";
    }
  }
}

const playerBoard = new gameBoard();

export default playerBoard;
