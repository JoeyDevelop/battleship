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
test("Return false because move is invalid", () => {
  expect(playerBoard.placeShip(1, 6, { length: 5 })).toStrictEqual(false);
});

// test("Return array of places occupied by new ship", () => {
//   expect(playerBoard.placeShip(1, 6, testShip)).toStrictEqual(false);
// });

test("Return array of places occupied by new ship", () => {
  expect(playerBoard.placeShip(1, 6, testShip)).toStrictEqual([
    { col: 6, row: [1], shipIndex: undefined, shipName: "Boat" },
    { col: 6, row: [2], shipIndex: undefined, shipName: "Boat" },
  ]);
});
