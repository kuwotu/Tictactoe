(function () {
  const Gameboard = {
    gameboard: ["O", "O", "O"],

    addMark: function () {
      const boardSquare = document.getElementsByClassName("board-square");
      for (i = 0; i < boardSquare.length; i++) {
        xMarksTheSpot = (event) => {
          const spot = event.target;
          spot.textContent = "X";
        };
        boardSquare[i].addEventListener("click", xMarksTheSpot);
      }
    },
    render: function () {
      const boardSquare = document.getElementsByClassName("board-square");
      const score = this.gameboard;
      for (i = 0; i < score.length; i++) {
        console.log((boardSquare[i].textContent = score[i]));
      }
    },
  };

  const Player = () => {
    const playerSpots = [];
  };

  Gameboard.addMark();
  Gameboard.render();
})();
