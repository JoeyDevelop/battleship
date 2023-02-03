import gameBoard from "./gameboard";
// import createPlayer from "./player";
import ship from "./ship";

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

  //place ships on both boards
  playerBoard.placeShip(2, 4, carrier);
  playerBoard.placeShip(1, 2, battleship);
  playerBoard.placeShip(3, 2, cruiser);
  playerBoard.placeShip(1, 1, submarine);
  playerBoard.placeShip(1, 9, destroyer);

  compBoard.placeShip(2, 4, carrier);
  compBoard.placeShip(1, 2, battleship);
  compBoard.placeShip(5, 5, cruiser);
  compBoard.placeShip(5, 9, submarine);
  compBoard.placeShip(1, 1, destroyer);
}

playGame();
