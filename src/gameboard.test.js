import playerBoard from "./gameboard";

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
test("Return true because move is invalid", () => {
  expect(playerBoard.placeShip(1, 6, { length: 5 })).toStrictEqual(false);
});
