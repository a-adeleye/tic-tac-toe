let gameBoard = ["", "", "", "", "", "", "", "", ""];

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

const gameOver = document.querySelector(".endGame");
const restart = document.querySelector("#restart");

const gamePlay = (() => {
  let currentPlayer = x;
  let winner = "";
  const dark = "#171614";
  const light = "#eddfef";
  let color = dark;

  const changePlayer = () => {
    currentPlayer = x;
    color = dark;
  }

  const changeComp = () => {
    currentPlayer = o;
    color = light;
  }

  const updateTurn = () => {
    document.querySelector(
      ".turn"
    ).textContent = `Player ${currentPlayer}'s turn`;
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
  };

  const checkWinner = () => {
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = gameBoard[winCondition[0]];
      const b = gameBoard[winCondition[1]];
      const c = gameBoard[winCondition[2]];
      if (!a || !b || !c) {
        continue;
      } else {
        if (a === b && b === c) {
          winner = currentPlayer;
          console.log(winner);
          break;
        }
      }
    }
  };

  const endGame = () => {
    let winningMessage = document.createElement("p");
    winningMessage.classList.add("winner");
    winningMessage.textContent = `${currentPlayer} wins!`;
    if (winner) {
      gameOver.insertBefore(winningMessage, restart);
      gameOver.classList.add("show");
    }
    if (!winner && gameBoard.length == 9 && !gameBoard.includes("")) {
      winningMessage.textContent = `It's a tie`;
      gameOver.insertBefore(winningMessage, restart);
      gameOver.classList.add("show");
    }
  };

  function reset(elem) {
    elem.style.cursor = "pointer";
    elem.textContent = "";
  }

  const restartGame = () => {
    let el = document.querySelector(".winner");
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    tiles.forEach((tile) => reset(tile));
    gameOver.classList.replace("show", "hide");
    winner = false;
    tiles.forEach((tile) =>
      tile.addEventListener("click", play, { once: true })
    );
    el.parentNode.removeChild(el);
    currentPlayer = x;
    color = dark;
  };

  const computerMove = () => {
    let emptyTiles = [];
    let tileIndex = "";
    if (gameBoard.includes("")) {
      for (i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] == "") {
          emptyTiles.push(i);
        }
      }
      tileIndex = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
      gameBoard[tileIndex] = currentPlayer;
      tiles[tileIndex].style.cssText = `cursor: not-allowed; color: ${color}`;
      tiles[tileIndex].textContent = currentPlayer;
      tiles[tileIndex].removeEventListener("click", play);
    }
  };

  const roundEnd = () => {
    if (winner) return true;
    else return false;
  };

  return {
    markBoard,
    updateGameBoard,
    changePlayer,
    changeComp,
    updateTurn,
    restartGame,
    computerMove,
    checkWinner,
    endGame,
    roundEnd
  };
})();

const play = () => {
  gamePlay.markBoard();
  gamePlay.updateGameBoard();
  //gamePlay.updateTurn();
  gamePlay.checkWinner();
  gamePlay.endGame();
  gamePlay.changeComp();
  if (!gamePlay.roundEnd()) {
    gamePlay.computerMove();
    gamePlay.checkWinner();
    gamePlay.endGame();
    gamePlay.changePlayer();
  }
};

let tiles = Array.from(document.querySelectorAll(".tile"));

document.addEventListener("DOMContentLoaded", () => {
  tiles.forEach((tile) => tile.addEventListener("click", play, { once: true }));
  restart.addEventListener("click", gamePlay.restartGame);
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







document.addEventListener("DOMContentLoaded", () => {
  setTurn();
  tiles.forEach((tile) =>
    tile.addEventListener("click", setPiece, { once: true })
  );
});

*/
