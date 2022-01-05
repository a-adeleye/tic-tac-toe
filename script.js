const gameBoard = [];

let playerOneMark = "X";
let playerTwoMark = "O";

let tiles = document.querySelectorAll(".tile");

let playerOne = Math.floor(Math.random() * 3) < 2;
let playerTwo = !playerOne;

function setPiece() {
  if (playerOne) {
    this.style.color = "#171614";
    this.textContent = playerOneMark;
    gameBoard.push(playerOneMark);
    player = !player;
  } else {
    this.textContent = playerTwoMark;
    gameBoard.push(playerTwoMark);
    this.style.color = "#eddfef";
   player = !player;
  }
  determineWinner();

  setTurn();
}

let player = playerOne ? playerOneMark : playerTwoMark;

function setTurn() {
  document.querySelector(".turn").textContent = `Player ${player}'s turn`;
}

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function determineWinner() {
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const winCondition = winningConditions[i];
    const a = gameBoard[winCondition[0]];
    const b = gameBoard[winCondition[1]];
    const c = gameBoard[winCondition[2]];
    if (!a || !b || !c) {
      continue;
    } else {
        console.log(winCondition)
      if (a === b && b === c) {
        roundWon = true;
        console.log(player + " won");
        break;
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTurn();
  tiles.forEach((tile) =>
    tile.addEventListener("click", setPiece, { once: true })
  );
});
