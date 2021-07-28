(function () {
  const Gameboard = {
    gameboard: [],
    addMark: function () {
      const boardSquare = document.getElementsByClassName("board-square");
      for (i = 0; i < boardSquare.length; i++) {
        boardSquare[i].addEventListener("click", (event) => {
          event.target.getAttribute("id");
        });
      }
    },
  };
  Gameboard.addMark();
})();
