const boardSquare = document.getElementsByClassName("board-square");

const gameboard = [];
let counter = 0;

// Player is pushing its marker into the Gameboard array
// Created players

const Player = (marker) => {
  const turn = () => {
    gameboard.push(marker);
  };
  return { turn };
};

const player1 = Player("X");
const player2 = Player("O");

// addMarker calls player to add marker into array, gets the div target of the click
// and calls the render function with the divs number

function addMarker(event) {
  const spot = event.target;
  const spotNumber = spot.getAttribute("data-number");
  console.log(gameboard);
  render(spotNumber);
}

// render takes the div clicked (spot) and puts the latest array marker in that div

render = (spotNumber) => {
  if (
    boardSquare[spotNumber].textContent === "X" ||
    boardSquare[spotNumber].textContent === "O"
  ) {
    gameboard.splice(-1);
    counter--;
    boardSquare[spotNumber].removeEventListener("click", runLoop);
  } else {
    return (boardSquare[spotNumber].textContent =
      gameboard[gameboard.length - 1]);
  }
};

runLoop = (event) => {
  counter++;

  // to control flow of the game

  if (counter % 2 === 0) {
    player2.turn();
  } else player1.turn();

  addMarker(event);

  if (counter === 9) {
    console.log("stop");
  }
};

function start() {
  for (i = 0; i < boardSquare.length; i++) {
    boardSquare[i].addEventListener("click", runLoop);
  }
}

start();
