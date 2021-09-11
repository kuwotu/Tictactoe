const displayController = (() => {
  const choiceButton = document.querySelectorAll(".choice-button");
  const displayBoard = document.querySelector("#container");
  const gameResultMessage = document.querySelector("#game-result-message");
  const restartButton = document.getElementById("restart-button");
  const gameOver = document.getElementById("restart-container");

  const gameIntro = (event) => {
    const playerChoiceIntro = document.querySelector(
      "#player-instructions-container"
    );
    playerChoiceIntro.style.cssText = "display: none";
    choiceButton.forEach((button) =>
      button.removeEventListener("click", gameIntro)
    );

    displayBoard.style.cssText = "display: grid";

    let whoIsFirst = event.target.value;

    const playerPick = gameBoard.setPlayers(whoIsFirst);
    gameController.startGame(playerPick);
    return { whoIsFirst };
  };

  choiceButton.forEach((button) => button.addEventListener("click", gameIntro));

  const addMarker = (event) => {
    const spot = event.target;
    const spotNumber = spot.getAttribute("data-number");
    if (
      gameBoard.boardSquare[spotNumber].textContent === "X" ||
      gameBoard.boardSquare[spotNumber].textContent === "O"
    ) {
      gameBoard.whosTurnIsIt--;
      return;
    } else {
      gameBoard.boardSquare[spotNumber].textContent =
        gameBoard.board[gameBoard.board.length - 1];
      gameController.checkForWinner();
    }
  };

  const toggleVisibility = () => {
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

  const showGameOver = () => {
    gameOver.classList.toggle("game-over");
    toggleVisibility();
  };

  restartGame = () => {
    for (i = 0; i < gameBoard.boardSquare.length; i++) {
      gameBoard.boardSquare[i].textContent = "";
    }

    //remove overlay
    gameOver.classList.toggle("game-over");
    // remove button

    // remove winning text
    toggleVisibility();

    gameBoard.whosTurnIsIt = 0;
    board = [];
  };

  restartButton.addEventListener("click", restartGame);

  return {
    gameResultMessage,
    gameIntro,
    addMarker,
    toggleVisibility,
    showGameOver,
    gameOver,
  };
})();

const gameBoard = (() => {
  const boardSquare = document.querySelectorAll(".board-square");
  let board = [];
  let whosTurnIsIt = 0;

  const Player = (marker) => {
    const turn = () => {
      board.push(marker);
    };
    return { turn };
  };

  const setPlayers = (whoIsFirst) => {
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

  return { Player, boardSquare, board, whosTurnIsIt, setPlayers };
})();

const gameController = (() => {
  const startGame = (playerPick) => {
    playGame = (playerPick, event) => {
      gameBoard.whosTurnIsIt++;

      if (gameBoard.whosTurnIsIt % 2 === 0) {
        playerPick[1].turn();
      } else playerPick[0].turn();

      displayController.addMarker(event);
    };

    for (i = 0; i < gameBoard.boardSquare.length; i++) {
      gameBoard.boardSquare[i].addEventListener("click", function (event) {
        playGame(playerPick, event);
      });
    }
  };

  const checkForWinner = () => {
    if (
      gameBoard.boardSquare[0].textContent === "X" ||
      gameBoard.boardSquare[0].textContent === "O"
    ) {
      if (
        gameBoard.boardSquare[0].textContent ===
          gameBoard.boardSquare[1].textContent &&
        gameBoard.boardSquare[1].textContent ===
          gameBoard.boardSquare[2].textContent
      ) {
        displayController.gameResultMessage.textContent = `${gameBoard.boardSquare[0].textContent} won!`;
        displayController.showGameOver();
        return;
      } else if (
        gameBoard.boardSquare[0].textContent ===
          gameBoard.boardSquare[3].textContent &&
        gameBoard.boardSquare[3].textContent ===
          gameBoard.boardSquare[6].textContent
      ) {
        displayController.gameResultMessage.textContent = `${gameBoard.boardSquare[0].textContent} won!`;
        displayController.showGameOver();
        return;
      } else if (
        gameBoard.boardSquare[0].textContent ===
          gameBoard.boardSquare[4].textContent &&
        gameBoard.boardSquare[4].textContent ===
          gameBoard.boardSquare[8].textContent
      ) {
        displayController.gameResultMessage.textContent = `${gameBoard.boardSquare[0].textContent} won!`;
        displayController.showGameOver();
        return;
      }
    }
    if (
      gameBoard.boardSquare[4].textContent === "X" ||
      gameBoard.boardSquare[4].textContent === "O"
    ) {
      if (
        gameBoard.boardSquare[2].textContent ===
          gameBoard.boardSquare[4].textContent &&
        gameBoard.boardSquare[4].textContent ===
          gameBoard.boardSquare[6].textContent
      ) {
        displayController.gameResultMessage.textContent = `${gameBoard.boardSquare[4].textContent} won!`;
        displayController.showGameOver();
        return;
      } else if (
        gameBoard.boardSquare[1].textContent ===
          gameBoard.boardSquare[4].textContent &&
        gameBoard.boardSquare[4].textContent ===
          gameBoard.boardSquare[7].textContent
      ) {
        displayController.gameResultMessage.textContent = `${gameBoard.boardSquare[4].textContent} won!`;
        displayController.showGameOver();
        return;
      } else if (
        gameBoard.boardSquare[3].textContent ===
          gameBoard.boardSquare[4].textContent &&
        gameBoard.boardSquare[4].textContent ===
          gameBoard.boardSquare[5].textContent
      ) {
        displayController.gameResultMessage.textContent = `${gameBoard.boardSquare[4].textContent} won!`;
        displayController.showGameOver();
        return;
      }
    }
    if (
      gameBoard.boardSquare[8].textContent === "X" ||
      gameBoard.boardSquare[8].textContent === "O"
    ) {
      if (
        gameBoard.boardSquare[6].textContent ===
          gameBoard.boardSquare[7].textContent &&
        gameBoard.boardSquare[7].textContent ===
          gameBoard.boardSquare[8].textContent
      ) {
        displayController.gameResultMessage.textContent = `${boardSquare[8].textContent} won!`;
        displayController.showGameOver();
        return;
      } else if (
        gameBoard.boardSquare[2].textContent ===
          gameBoard.boardSquare[5].textContent &&
        gameBoard.boardSquare[5].textContent ===
          gameBoard.boardSquare[8].textContent
      ) {
        displayController.gameResultMessage.textContent = `${gameBoard.boardSquare[8].textContent} won!`;
        displayController.showGameOver();
        return;
      }
    }
    if (gameBoard.whosTurnIsIt === 9) {
      displayController.gameResultMessage.textContent = `Draw!`;
      displayController.showGameOver();
    }
  };

  return { startGame, checkForWinner };
})();
