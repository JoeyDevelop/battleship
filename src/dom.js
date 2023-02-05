class Dom {
  constructor() {
    this.playerTiles = [];
    this.compTiles = [];
  }
  // Setup boards
  addTiles(playerArr, compArr) {
    const compBoard = document.querySelector(".compboard");
    const playerBoard = document.querySelector(".playerboard");

    playerArr.forEach((element) => {
      element.forEach((element) => {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.setAttribute("col", element.row);
        tile.setAttribute("row", element.col);
        tile.addEventListener("click", () => {
          alert(
            "row: " +
              tile.getAttribute("col") +
              " col: " +
              tile.getAttribute("row")
          );
          console.log(this.playerTiles);
        });
        playerBoard.appendChild(tile);
        this.playerTiles.push(tile);
      });
    });

    compArr.forEach((element) => {
      element.forEach((element) => {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.setAttribute("col", element.row);
        tile.setAttribute("row", element.col);
        tile.addEventListener("click", () => {
          alert(
            "row: " +
              tile.getAttribute("col") +
              " col: " +
              tile.getAttribute("row")
          );
          console.log(this.compTiles);
        });
        compBoard.appendChild(tile);
        this.compTiles.push(tile);
      });
    });
  }
}
// Working method to access correct tile
// this.compTiles.forEach((tile) => {
//   const row = tile.getAttribute("row");
//   const col = tile.getAttribute("col");
//   if (row == 1 && col == 4) {
//     console.log("yes");
//   }
// });

export default Dom;
