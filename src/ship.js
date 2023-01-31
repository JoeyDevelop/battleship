function createShip(length, name) {
  return {
    name: name,
    length: length,
    hits: 0,
    sunk: false,
    hit() {
      this.hits++;
      this.isSunk();
    },
    isSunk() {
      if (this.hits === length) {
        this.sunk = true;
      }
    },
  };
}
export default createShip;
