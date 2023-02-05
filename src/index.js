import gameBoard from "./gameboard";
// import createPlayer from "./player";
import ship from "./ship";
import Dom from "./dom";

function playGame() {
  // define all main variables
  // const player = new createPlayer("Joey");
  // const computer = new createPlayer("Computer");
  const carrier = new ship(5, "Carrier");
  const battleship = new ship(4, "Battleship");
  const cruiser = new ship(3, "Cruiser");
  const submarine = new ship(3, "Submarine");
  const destroyer = new ship(2, "Destroyer");
  const playerBoard = new gameBoard();
  const compBoard = new gameBoard();
  const dom = new Dom();

  //place ships on both boards
  playerBoard.placeShip(2, 4, carrier);
  playerBoard.placeShip(7, 7, battleship);
  playerBoard.placeShip(7, 10, cruiser);
  playerBoard.placeShip(1, 1, submarine);
  playerBoard.placeShip(2, 9, destroyer);

  compBoard.placeShip(4, 5, carrier);
  compBoard.placeShip(1, 2, battleship);
  compBoard.placeShip(5, 8, cruiser);
  compBoard.placeShip(8, 1, submarine);
  compBoard.placeShip(1, 10, destroyer);

  dom.addTiles(playerBoard.getGameBoard(), compBoard.getGameBoard());
  dom.addShips(playerBoard.getGameBoard(), compBoard.getGameBoard());
}

playGame();
