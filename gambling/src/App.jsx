import { useState } from "react";
import Player from "./components/Player.jsx";

function App() {
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const [player1Result, setPlayer1Result] = useState(0);
  const [player2Result, setPlayer2Result] = useState(0);
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState("");

  const LuckyWinner = (player1GG, player2GG) => {
    if (player1GG > player2GG) {
      setWinner("looser player 2 LOL");
    } else if (player2GG > player1GG) {
      setWinner("looser player 1 LOL");
    } else {
      setWinner("both is looser");
    }
    setRound(0);
    player1Result(0);
    player2Result(0);
  };

  const rollDice = () => {
    const RandomNumber = Math.floor(Math.random() * 6) + 1;
    setWinner("");

    if (currentPlayer === 1) {
      setPlayer1(RandomNumber);
      setPlayer1Result(player1Result + RandomNumber + 1);
      setCurrentPlayer(2);
    } else {
      setPlayer2(RandomNumber);
      setCurrentPlayer(1);
      let newResult = player2Result + RandomNumber + 1;

      setPlayer2Result(RandomNumber);
      setPlayer2Result(newResult);
      setCurrentPlayer(1);
      setRound(round + 1);
    }
  };
  if (round === 1) {
        LuckyWinner(player1Result, newResult);
      }

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
      <h1>{winner}</h1>
    </div>
  );
}

export default App;
