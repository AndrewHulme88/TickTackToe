// Gameboard setup
const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  const setCell = (index, marker) => {
    if (index >= 0 && index < board.length) {
      board[index] = marker;
    }
  };

  return {getBoard, resetBoard, setCell};
})();

// Player object
const Player = (name, marker) => {
  return {name, marker};
};

// Game controller logic
const GameController = (() => {
  const player1 = Player("Player 1", "O");
  const player2 = Player("Player 2", "X");
})
