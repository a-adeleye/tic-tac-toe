const gameBoard = [];

let x = "X";
let o = "O";

let currentPlayer = o;

const gamePlay = (() => {
  
const changeTurn = () => {
    console.log(currentPlayer)
    currentPlayer === x ? currentPlayer = o : currentPlayer = x;
}

return {changeTurn}

})();

document.addEventListener('click', gamePlay.changeTurn())

let tiles = document.querySelectorAll(".tile");

/* let playerOne = Math.floor(Math.random() * 3) < 2;
let playerTwo = !playerOne;

function setPiece() {
  if (playerOne) {
    this.style.color = "#171614";
    this.textContent = playerOneMark;
    gameBoard.push(playerOneMark);
    playerOne = false;
    playerTwo = true;
  } else {
    this.textContent = playerTwoMark;
    gameBoard.push(playerTwoMark);
    this.style.color = "#eddfef";
    playerOne = true;
    playerTwo = false;
  }
  determineWinner();

  setTurn();
}

let mark;



function setTurn() {
  document.querySelector(".turn").textContent = `Player ${mark}'s turn`;
  mark = playerOne ? playerOneMark : playerTwoMark;
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
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    const a = gameBoard[winCondition[0]];
    const b = gameBoard[winCondition[1]];
    const c = gameBoard[winCondition[2]];
    if (!a || !b || !c) {
      continue;
    } else {
      if (a === b && b === c) {
        roundWon = true;
        console.log(a + ' ' +b+' '+c+ ' - ' + i)
        console.log(roundWon);
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

*/
