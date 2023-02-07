import gameBoard from "./gameboard";
import Ship from "./ship";

const playBoard = new gameBoard();

test("Return false because length is too long", () => {
  expect(playBoard.checkValidMove(0, 9, 2)).toStrictEqual(false);
});

test("Return false because move is invalid", () => {
  expect(playBoard.checkValidMove(4, 12, 1)).toStrictEqual(false);
});

// playerBoard.placeShip tests
const testShip = new Ship(2, "Boat");
const canoe = new Ship(1, "Canoe");

test("Return array of places occupied by new ship", () => {
  expect(playBoard.placeShip(1, 6, testShip)).toStrictEqual([
    { col: 6, row: 1, shipIndex: undefined, shipName: "Boat" },
    { col: 6, row: 1, shipIndex: undefined, shipName: "Boat" },
  ]);
});

// playerBoard.receiveAttack tests

test("Return false if attack fails", () => {
  expect(playBoard.receiveAttack(4, 7)).toStrictEqual(false);
});

test("Return false if attack fails", () => {
  expect(playBoard.receiveAttack(3, 6)).toStrictEqual(false);
});

//playerBoard.allShipsSunk() tests
test("Return false if all ships are sunk", () => {
  expect(playBoard.allShipsSunk()).toStrictEqual(false);
});

// Adding ship to test other return
test("Return newly occupied spaces", () => {
  expect(playBoard.placeShip(1, 1, canoe)).toStrictEqual([
    {
      col: 1,
      row: 1,
      shipIndex: undefined,
      shipName: "Canoe",
    },
  ]);
});

test("Return false if any ships are still floating", () => {
  expect(playBoard.allShipsSunk()).toStrictEqual(false);
});

// playerBoard.checkValidMove and .placeShip further tests

test("Return false if coordinate is already occupied", () => {
  expect(playBoard.placeShip(1, 1, testShip)).toStrictEqual(false);
});

test("Return false if move is invalid", () => {
  expect(playBoard.checkValidMove(1, 1, canoe)).toStrictEqual(false);
});
