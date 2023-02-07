import gameBoard from "./gameboard";
import createPlayer from "./player";
import ship from "./ship";
import Dom from "./dom";

function playGame() {
  // define all main variables

  let playerName = document.querySelector(".name");
  // Prompt for player name
  // playerName.innerHTML = prompt("Enter player name");
  playerName.innerHTML = "Joey";
  const computer = new createPlayer("Computer");
  const carrier = new ship(5, "Carrier");
  const battleship = new ship(4, "Battleship");
  const cruiser = new ship(3, "Cruiser");
  const submarine = new ship(3, "Submarine");
  const destroyer = new ship(2, "Destroyer");
  const carrier2 = new ship(5, "Carrier");
  const battleship2 = new ship(4, "Battleship");
  const cruiser2 = new ship(3, "Cruiser");
  const submarine2 = new ship(3, "Submarine");
  const destroyer2 = new ship(2, "Destroyer");
  const playerBoard = new gameBoard();
  const compBoard = new gameBoard();
  const dom = new Dom();

  //place ships on both boards
  playerBoard.placeShip(2, 4, carrier);
  playerBoard.placeShip(7, 7, battleship);
  playerBoard.placeShip(7, 10, cruiser);
  playerBoard.placeShip(1, 1, submarine);
  playerBoard.placeShip(2, 9, destroyer);

  compBoard.placeShip(4, 5, carrier2);
  compBoard.placeShip(1, 2, battleship2);
  compBoard.placeShip(5, 8, cruiser2);
  compBoard.placeShip(8, 1, submarine2);
  compBoard.placeShip(1, 10, destroyer2);

  dom.addTiles(playerBoard.getGameBoard(), compBoard.getGameBoard());
  dom.addShips(playerBoard.getGameBoard(), compBoard.getGameBoard());

  dom.compTiles.forEach((tile) => {
    tile.addEventListener("click", () => {
      round(tile.getAttribute("col"), tile.getAttribute("row"));
    });
  });

  function round(row, col) {
    // Player attack
    const attack = compBoard.receiveAttack(row, col);
    if (attack == true) {
      dom.compTiles.forEach((tile) => {
        if (
          tile.getAttribute("col") == row &&
          tile.getAttribute("row") == col
        ) {
          tile.classList.add("hit");
          tile.classList.remove("ship");
        }
      });
    } else if (attack == false) {
      dom.compTiles.forEach((tile) => {
        if (
          tile.getAttribute("col") == row &&
          tile.getAttribute("row") == col
        ) {
          tile.classList.add("miss");
        }
      });
    } else if (attack === "fail") {
      alert("You have already attacked this spot! Please try again.");
      return;
    }

    // Computer attack
    let compHit = false;
    // if attack hits same location again, loop
    while (compHit === false) {
      let compRow = computer.makeRandomAttack();
      let compCol = computer.makeRandomAttack();
      const compAttack = playerBoard.receiveAttack(compRow, compCol);
      if (compAttack == true) {
        dom.playerTiles.forEach((tile) => {
          if (
            tile.getAttribute("col") == compRow &&
            tile.getAttribute("row") == compCol
          ) {
            tile.classList.add("hit");
            tile.classList.remove("ship");
            compHit = true;
          }
        });
      } else if (compAttack == false) {
        dom.playerTiles.forEach((tile) => {
          if (
            tile.getAttribute("col") == compRow &&
            tile.getAttribute("row") == compCol
          ) {
            tile.classList.add("miss");
            tile.classList.remove("ship");
            compHit = true;
          }
        });
      }
    }

    //end loop if player or computer wins (comp not implemented)
    if (compBoard.allShipsSunk() === true) {
      console.log(compBoard.ships);
      alert("You win!");
    } else if (playerBoard.allShipsSunk() === true) {
      alert("Computer wins!");
    }
  }
}

playGame();
