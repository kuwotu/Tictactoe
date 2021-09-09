const boardSquare = document.querySelectorAll(".board-square");
const container = document.querySelectorAll("#container");
const choiceButton = document.querySelectorAll(".choice-button");
const playerChoiceIntro = document.querySelector(
  "#player-instructions-container"
);
const displayBoard = document.querySelector("#container");
const gameResultMessage = document.querySelector("#game-result-message");
const gameOver = document.getElementById("restart-container");
const restartButton = document.getElementById("restart-button");

let gameboard = [];
let whosTurnIsIt = 0;

const Player = (marker) => {
  const turn = () => {
    gameboard.push(marker);
  };
  return { turn };
};

setPlayers = (whoIsFirst) => {
  if (whoIsFirst === "X") {
    let player1 = Player("X");
    let player2 = Player("O");
    return [player1, player2];
  } else if (whoIsFirst === "O") {
    let player1 = Player("O");
    let player2 = Player("X");
    return [player1, player2];
  }
};

gameIntro = (event) => {
  playerChoiceIntro.style.cssText = "display: none";
  choiceButton.forEach((button) =>
    button.removeEventListener("click", gameIntro)
  );

  displayBoard.style.cssText = "display: grid";

  let whoIsFirst = event.target.value;

  const result = setPlayers(whoIsFirst);
  start(result);
};

choiceButton.forEach((button) => button.addEventListener("click", gameIntro));

// Player is pushing its marker into the Gameboard array
// Created players

function start(result) {
  for (i = 0; i < boardSquare.length; i++) {
    boardSquare[i].addEventListener("click", function (event) {
      playGame(result, event);
      console.log("im awake");
    });
  }
}

playGame = (result, event) => {
  whosTurnIsIt++;

  if (whosTurnIsIt % 2 === 0) {
    result[1].turn();
  } else result[0].turn();

  addMarker(event);
};

// addMarker calls player to add marker into array, gets the div target of the click
// and checks for winner

function addMarker(event) {
  const spot = event.target;
  const spotNumber = spot.getAttribute("data-number");
  if (
    boardSquare[spotNumber].textContent === "X" ||
    boardSquare[spotNumber].textContent === "O"
  ) {
    whosTurnIsIt--;
    return;
  }
  boardSquare[spotNumber].textContent = gameboard[gameboard.length - 1];
  checkForWinner();
}

checkForWinner = () => {
  if (
    boardSquare[0].textContent === "X" ||
    boardSquare[0].textContent === "O"
  ) {
    if (
      boardSquare[0].textContent === boardSquare[1].textContent &&
      boardSquare[1].textContent === boardSquare[2].textContent
    ) {
      gameResultMessage.textContent = `${boardSquare[0].textContent} won!`;
      showGameOver();
      return;
    } else if (
      boardSquare[0].textContent === boardSquare[3].textContent &&
      boardSquare[3].textContent === boardSquare[6].textContent
    ) {
      gameResultMessage.textContent = `${boardSquare[0].textContent} won!`;
      showGameOver();
      return;
    } else if (
      boardSquare[0].textContent === boardSquare[4].textContent &&
      boardSquare[4].textContent === boardSquare[8].textContent
    ) {
      gameResultMessage.textContent = `${boardSquare[0].textContent} won!`;
      showGameOver();
      return;
    }
  }
  if (
    boardSquare[4].textContent === "X" ||
    boardSquare[4].textContent === "O"
  ) {
    if (
      boardSquare[2].textContent === boardSquare[4].textContent &&
      boardSquare[4].textContent === boardSquare[6].textContent
    ) {
      gameResultMessage.textContent = `${boardSquare[4].textContent} won!`;
      showGameOver();
      return;
    } else if (
      boardSquare[1].textContent === boardSquare[4].textContent &&
      boardSquare[4].textContent === boardSquare[7].textContent
    ) {
      gameResultMessage.textContent = `${boardSquare[4].textContent} won!`;
      showGameOver();
      return;
    } else if (
      boardSquare[3].textContent === boardSquare[4].textContent &&
      boardSquare[4].textContent === boardSquare[5].textContent
    ) {
      gameResultMessage.textContent = `${boardSquare[4].textContent} won!`;
      showGameOver();
      return;
    }
  }
  if (
    boardSquare[8].textContent === "X" ||
    boardSquare[8].textContent === "O"
  ) {
    if (
      boardSquare[6].textContent === boardSquare[7].textContent &&
      boardSquare[7].textContent === boardSquare[8].textContent
    ) {
      gameResultMessage.textContent = `${boardSquare[8].textContent} won!`;
      showGameOver();
      return;
    } else if (
      boardSquare[2].textContent === boardSquare[5].textContent &&
      boardSquare[5].textContent === boardSquare[8].textContent
    ) {
      gameResultMessage.textContent = `${boardSquare[8].textContent} won!`;
      showGameOver();
      return;
    }
  }
  if (whosTurnIsIt === 9) {
    console.log("stop");
    gameResultMessage.textContent = `Draw!`;
    showGameOver();
  }
};

showGameOver = () => {
  gameOver.classList.toggle("game-over");
  toggleVisibility();
};

toggleVisibility = () => {
  if (
    gameResultMessage.style.display === "" &&
    restartButton.style.display === ""
  ) {
    gameResultMessage.style.display = "inline";
    restartButton.style.display = "inline";
  } else {
    gameResultMessage.style.display = "";
    restartButton.style.display = "";
  }
};

restartGame = () => {
  for (i = 0; i < boardSquare.length; i++) {
    boardSquare[i].textContent = "";
  }

  //remove overlay
  gameOver.classList.toggle("game-over");
  // remove button

  // remove winning text
  toggleVisibility();

  whosTurnIsIt = 0;
  gameboard = [];
};

restartButton.addEventListener("click", restartGame);
