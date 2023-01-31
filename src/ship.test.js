import createShip from "./ship";

const carrier = new createShip(5, "Carrier");
const boat = new createShip(2, "Boat");

test("Return accurate ship length", () => {
  expect(carrier.length).toBe(5);
});

test("Return correct ship name", () => {
  expect(carrier.name).toBe("Carrier");
});

test("Return correct amount of current hits", () => {
  expect(carrier.hits).toBe(0);
});

test("Return ship sunk status", () => {
  expect(carrier.sunk).toBe(false);
});

boat.hit();
boat.hit();

test("Return accurate ship length", () => {
  expect(boat.length).toBe(2);
});

test("Return correct ship name", () => {
  expect(boat.name).toBe("Boat");
});

test("Return correct amount of current hits", () => {
  expect(boat.hits).toBe(2);
});

test("Return ship sunk status", () => {
  expect(boat.sunk).toBe(true);
});
