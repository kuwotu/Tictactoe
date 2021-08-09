(function () {
  const Gameboard = {
    gameboard: [],

    addMarker: function () {
      const boardSquare = document.getElementsByClassName("board-square");
      for (i = 0; i < boardSquare.length; i++) {
        markTheSpot = (event) => {
          const spot = event.target;
          console.log(this.gameboard);
          player1();
          Gameboard.render(spot);
        };
        boardSquare[i].addEventListener("click", markTheSpot);
      }
    },
    render: function (spot) {
      const boardSquare = document.getElementsByClassName("board-square");
      const num = spot.getAttribute("data-number");
      const score = this.gameboard;
      for (i = 0; i < score.length; i++) {
        console.log((boardSquare[num].textContent = score[i]));
      }
    },
  };

  const Player = (marker) => {
    const wait = () => {
      Gameboard.gameboard.push(marker);
    };
    return wait;
  };

  const player1 = Player("X");
  //const player2 = Player("O")

  Gameboard.addMarker();
})();

// I have to pass in the spot of the click, so that the render puts the array number in the spot
