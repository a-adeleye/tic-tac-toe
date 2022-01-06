const gameBoard = ["","","","","","","","",""];

let x = "X";
let o = "O";

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

const gamePlay = (() => {
  let currentPlayer = o;
  const dark = "#171614";
  const light = "#eddfef";

  const changeTurn = () => {
    console.log(currentPlayer);
    currentPlayer === x
      ? ((currentPlayer = o), (color = light))
      : ((currentPlayer = x), (color = dark));
  };

  const updateTurn = () => {
    document.querySelector(
      ".turn"
    ).textContent = `Player ${currentPlayer}'s turn`;
    gamePlay.changeTurn();
  };

  const markBoard = (e) => {
    e || (e = window.event);
    target = e.target;
    target.style.cssText = `cursor: not-allowed; color: ${color}`;
    target.textContent = currentPlayer;
  };

  const updateGameBoard = (e) => {
    e || (e = window.event);
    target = e.target;
    index = tiles.indexOf(target);
    gameBoard[index] = currentPlayer;
    console.log(index);
  };

  const resetGame = () => {

  }

  return { changeTurn, updateTurn, markBoard, updateGameBoard, resetGame };
})();

const play = () => {
  gamePlay.updateTurn();
  gamePlay.markBoard();
  gamePlay.updateGameBoard();
};

let tiles = Array.from(document.querySelectorAll(".tile"));

document.addEventListener("DOMContentLoaded", () => {
  tiles.forEach((tile) => tile.addEventListener("click", play, { once: true }));
});

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
  
  mark = playerOne ? playerOneMark : playerTwoMark;
}



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
