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

const gameOver = document.querySelector('.endGame');
const restart = document.querySelector('#restart');

const gamePlay = (() => {
  let currentPlayer = o;
  let winner = '';
  const dark = "#171614";
  const light = "#eddfef";

  const changeTurn = () => {
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
    let winningMessage = document.createElement('p');
    winningMessage.classList.add('winner');
    winningMessage.textContent = `${currentPlayer} wins!`
    if(winner){
        gameOver.insertBefore(winningMessage,gameOver[0]);
        gameOver.classList.add('show');
    }
}

function reset(elem){
    elem.style.cursor = 'pointer';
    elem.textContent = '';
}

  const restartGame = () => {
    let el = document.querySelector('.winner');
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    tiles.forEach(tile => reset(tile));
    gameOver.classList.replace('show', 'hide');
    winner = false;
    tiles.forEach((tile) => tile.addEventListener("click", play, { once: true }));
    el.parentNode.removeChild(el);
  };

  return { changeTurn, updateTurn, markBoard, updateGameBoard, checkWinner, endGame, restartGame };
})();

const play = () => {
  gamePlay.updateTurn();
  gamePlay.markBoard();
  gamePlay.updateGameBoard();
  gamePlay.checkWinner();
  gamePlay.endGame();
};

let tiles = Array.from(document.querySelectorAll(".tile"));

document.addEventListener("DOMContentLoaded", () => {
  tiles.forEach((tile) => tile.addEventListener("click", play, { once: true }));
  restart.addEventListener('click', gamePlay.restartGame);
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
