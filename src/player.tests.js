import createPlayer from "./player";

const Joey = new createPlayer("Joey");

test("Return name of player", () => {
  expect(Joey.name).toStrictEqual("Joey");
});
