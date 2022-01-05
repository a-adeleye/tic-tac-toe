const gameBoard = ["X", "X", "O", "X", "O"];

let playerOneMark = "X";
let playerTwoMark = "O";

let tiles = document.querySelectorAll(".tile");

tiles.forEach((tile) => tile.addEventListener("click", markTile));



function markTile() {
  if (this.textContent) return;
  this.textContent = "X";
  this.style.color = '#171614';
  console.log("tile");
}
