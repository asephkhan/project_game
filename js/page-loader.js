window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
    document.getElementById("start").style.display = 'none';
  };

  function startGame() {
    const game = new Game();

    game.start();
  }
};
