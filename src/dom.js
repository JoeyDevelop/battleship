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
        ///////////
        tile.setAttribute("row", element.col);
        tile.setAttribute("col", element.row);
        tile.addEventListener("click", () => {
          alert(
            "row: " +
              tile.getAttribute("col") +
              " col: " +
              tile.getAttribute("row") +
              " shipName: " +
              tile.getAttribute("shipName")
          );
          // console.log(this.playerTiles);
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
              tile.getAttribute("row") +
              " shipName: " +
              tile.getAttribute("shipName")
          );
          // console.log(this.compTiles);
        });
        compBoard.appendChild(tile);
        this.compTiles.push(tile);
      });
    });
  }

  addShips(playerArr, compArr) {
    //Add ship name to tiles, show ships
    playerArr.forEach((element) => {
      element.forEach((element) => {
        if (element.shipName !== undefined) {
          const elRow = element.row;
          const elCol = element.col;
          // console.log(element.shipName);

          this.playerTiles.forEach((tile) => {
            const row = tile.getAttribute("col");
            const col = tile.getAttribute("row");
            if (row == elRow && col == elCol) {
              tile.setAttribute("shipName", element.shipName);
              tile.classList.add("ship");
              // console.log(tile);
            }
          });
        }
      });
    });

    //Add ship name to tiles, show ships
    compArr.forEach((element) => {
      element.forEach((element) => {
        if (element.shipName !== undefined) {
          const elRow = element.row;
          const elCol = element.col;
          // console.log(element.shipName);

          this.compTiles.forEach((tile) => {
            const row = tile.getAttribute("col");
            const col = tile.getAttribute("row");
            if (row == elRow && col == elCol) {
              tile.setAttribute("shipName", element.shipName);
              // These ships will not be shown in final product
              tile.classList.add("ship");
              // console.log(tile);
            }
          });
        }
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
