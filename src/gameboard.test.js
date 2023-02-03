import playerBoard from "./gameboard";
import Ship from "./ship";

test("Return true because move is valid", () => {
  expect(playerBoard.checkValidMove(10, 9, 1)).toStrictEqual(true);
});

test("Return false because length is too long", () => {
  expect(playerBoard.checkValidMove(0, 9, 2)).toStrictEqual(false);
});

test("Return false because move is invalid", () => {
  expect(playerBoard.checkValidMove(4, 12, 1)).toStrictEqual(false);
});

// playerBoard.placeShip tests
const testShip = new Ship(2, "Boat");
const canoe = new Ship(1, "Canoe");
test("Return false because move is invalid", () => {
  expect(playerBoard.placeShip(1, 6, { length: 5 })).toStrictEqual(false);
});

test("Return array of places occupied by new ship", () => {
  expect(playerBoard.placeShip(1, 6, testShip)).toStrictEqual([
    { col: 6, row: [1], shipIndex: undefined, shipName: "Boat" },
    { col: 6, row: [2], shipIndex: undefined, shipName: "Boat" },
  ]);
});

// playerBoard.receiveAttack tests
test("Return ship.hits", () => {
  expect(playerBoard.receiveAttack(1, 6)).toStrictEqual(1);
});

test("Return ship.hits", () => {
  expect(playerBoard.receiveAttack(2, 6)).toStrictEqual(2);
});

test("Return Miss! if attack fails", () => {
  expect(playerBoard.receiveAttack(4, 7)).toStrictEqual("Miss!");
});

test("Return Miss! if attack fails", () => {
  expect(playerBoard.receiveAttack(3, 6)).toStrictEqual("Miss!");
});

//playerBoard.allShipsSunk() tests
test("Return true if all ships are sunk", () => {
  expect(playerBoard.allShipsSunk()).toStrictEqual(true);
});

// Adding ship to test other return
test("Return newly occupied spaces", () => {
  expect(playerBoard.placeShip(1, 1, canoe)).toStrictEqual([
    {
      col: 1,
      row: [1],
      shipIndex: undefined,
      shipName: "Canoe",
    },
  ]);
});

test("Return false if any ships are still floating", () => {
  expect(playerBoard.allShipsSunk()).toStrictEqual(false);
});

// playerBoard.checkValidMove and .placeShip further tests

test("Return false if coordinate is already occupied", () => {
  expect(playerBoard.placeShip(1, 1, testShip)).toStrictEqual(false);
});

test("Return false if move is invalid", () => {
  expect(playerBoard.checkValidMove(2, 6, canoe)).toStrictEqual(false);
});
