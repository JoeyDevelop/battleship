class gameBoard {
  constructor() {
    this.gameBoardArray = this.createGameBoard();
    this.missedAttacks = [];
    this.ships = [];
  }
  createGameBoard() {
    let array = [];
    let arrayItem = [];
    let row = 1;
    for (let i = 1; i < 11; i++) {
      let col = 1;
      for (let j = 1; j < 11; j++) {
        arrayItem.push({
          row: row,
          col: col++,
          shipName: undefined,
          shipIndex: undefined,
        });
      }
      row++;
      array.push(arrayItem);
      arrayItem = [];
    }
    return array;
  }

  getGameBoard() {
    return this.gameBoardArray;
  }

  checkValidMove(x, y, length) {
    if (x < 1 || x + length > 11 || y < 1 || y > 10) {
      return false;
    } else if (this.gameBoardArray[x - 1][y - 1].shipName !== undefined) {
      return false;
    } else return true;
  }

  placeShip(x, y, ship) {
    if (this.checkValidMove(x, y, ship.length) === false) {
      return false;
    }
    this.ships.push(ship);
    let shipPlaces = [];

    // Reassign gameBoard shipName
    this.gameBoardArray[x - 1][y - 1].shipName = ship.name;

    //Push new objects to return array
    shipPlaces.push(this.gameBoardArray[x - 1][y - 1]);

    // Repeat if ship length is > 1;
    if (ship.length > 1) {
      for (let i = 1; i < ship.length; i++) {
        this.gameBoardArray[x - 1 + [i][0]][y - 1].shipName = ship.name;
        shipPlaces.push(this.gameBoardArray[x - 1][y - 1]);
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

  getMissedAttacks() {
    // return this.missedAttacks;
    let missedAttacks = [];
    this.missedAttacks.forEach((miss) => {
      const coord = { row: miss.row[0], col: miss.col };
      missedAttacks.push(coord);
    });
    return missedAttacks;
  }

  allShipsSunk() {
    let arr = [];
    this.ships.forEach((ship) => {
      if (ship.sunk === true) {
        arr.push(ship);
      }
    });
    if (this.ships.length === arr.length) {
      return true;
    } else return false;
  }
}

export default gameBoard;
