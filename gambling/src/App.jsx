import { useState } from "react";
import Player from "./components/Player.jsx";

function App() {
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const rollDice = () => {
    const RandomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer === 1) {
      setPlayer1(RandomNumber);
      setCurrentPlayer(2);
    } else {
      setPlayer2(RandomNumber);
      setCurrentPlayer(1);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        margin: 0,
      }}
    >
      <h1>Winner takes all</h1>

      <div>
        <Player
          title={"player 1"}
          num={player1}
          handleClick={rollDice}
          isDisabled={currentPlayer === 2}
        />

        <div>VS</div>

        <Player
          title={"player 2"}
          num={player2}
          handleClick={rollDice}
          isDisabled={currentPlayer === 1}
        />
      </div>
    </div>
  );
}

export default App;
