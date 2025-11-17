import { useState } from "react";
import GameOverScreen from "./components/GameOverScreen";
import GameScreen from "./components/GameScreen";

function App() {
  const [player1, setPlayer1] = useState({ roll: 1, score: 0 });
  const [player2, setPlayer2] = useState({ roll: 1, score: 0 });
  const [rounds, setRound] = useState(1);
  const gameOverCount = 5;

  const isGameOver = rounds > gameOverCount;

  const currentPlayer = () => {
    if (player1.roll !== null) {
      return 2;
    }

    return 1;
  };

  const winner = () => {
    if (player1.roll === null || player2.roll === null) {
      return null;
    }

    if (player1.roll > player2.roll) {
      return "Player 1";
    } else if (player2.roll > player1.roll) {
      return "Player 2";
    } else {
      return "tie";
    }
  };

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer() === 1) {
      setPlayer1((prev) => ({ ...prev, roll: randomNumber }));
    } else {
      setPlayer2((prev) => ({ ...prev, roll: randomNumber }));
    }
  };

  const playnNextRound = () => {
    setPlayer1(null);
    setPlayer2(null);
    setRound(rounds + 1);

    if (player1.roll > player2.roll) {
      setPlayer1((prev) => ({ ...prev, score: prev.score + 1 }));
    } else if (player2.roll > player1.roll) {
      setPlayer2((prev) => ({ ...prev, score: prev.score + 1 }));
    }
  };

  const playAgain = () => {
    setPlayer1((prev) => ({ ...prev, roll: null }));
    setPlayer2((prev) => ({ ...prev, roll: null }));
    setRound(1);
  };

  if (isGameOver) {
    return <GameOverScreen playAgain={playAgain} />;
  }

  return (
    <GameScreen
      currentPlayer={currentPlayer}
      player1roll={player1.roll}
      player2roll={player2.roll}
      rollDice={rollDice}
      winner={winner}
      playnNextRound={playnNextRound}
      rounds={rounds}
    />
  );
}

export default App;
