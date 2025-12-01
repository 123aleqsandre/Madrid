import { useState } from "react";

const initialGameBoard = [
  [{ value: null }, { value: null }, { value: null }],
  [{ value: null }, { value: null }, { value: null }],
  [{ value: null }, { value: null }, { value: null }],

  // const initialGameBoard = [
  //   [ null, null, null],
  //   [null, null, null],
  //   [null, null, null],
];
export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [player1, setPlayer1] = useState({ name: "Player 1", symbol: "X" });

  function handleResetClick() {
    // setGameBoard(initialGameBoard);
    setPlayer1((prevPlayer) => {
      prevPlayer.symbol = "O";
      prevPlayer.name = "Player 2";
      return prevPlayer;
    });
  }

  function handlePlayClick(colIndex, rowIndex) {
    setGameBoard((prevGameBoard) => {
      prevGameBoard[rowIndex][colIndex].value = "0";
      console.log(prevGameBoard);
      return prevGameBoard;
    });
  }
  return (
    <>
      <button onClick={handleResetClick}>Reset</button>
      <button onClick={handleResetClick}>{player1.name}</button>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => handlePlayClick(colIndex, rowIndex)}
                    disabled={playerSymbol.value !== null}
                  >
                    {playerSymbol.value}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}