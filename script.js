(function () {
  const Gameboard = {
    gameboard: [],

    // addMarker calls player to add marker into array, gets the div target of the click
    // and calls the render function with the divs number

    addMarker: function (marker) {
      const boardSquare = document.getElementsByClassName("board-square");
      markTheSpot = (event) => {
        const spot = event.target;
        const spotNumber = spot.getAttribute("data-number");
        Gameboard.gameboard.push(marker);
        console.log(this.gameboard);
        Gameboard.render(boardSquare, spotNumber);
      };
      for (i = 0; i < boardSquare.length; i++) {
        boardSquare[i].addEventListener("click", markTheSpot);
      }
    },

    // render takes the div clicked (spot) and puts the latest array marker in that div
    render: function (boardSquare, spotNumber) {
      const score = this.gameboard;
      for (i = 0; i < score.length; i++) {
        console.log((boardSquare[spotNumber].textContent = score[i]));
      }
      Gameboard.whosTurn(score);
    },

    // trying to add function to control flow of the game
    whosTurn: function (score) {
      if (score[0] === "X" || score[score.length - 1] === "X") {
        player2.turn();
      } else player1.turn();
    },
  };

  // Player is pushing its marker into the Gameboard array

  const Player = (marker) => {
    const turn = () => {
      Gameboard.addMarker(marker);
    };
    return { turn };
  };

  const player1 = Player("X");
  const player2 = Player("O");

  player1.turn();
})();
