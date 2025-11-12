import Player from "./Player";
import WinnerBanner from "./WinnerBanner";

export default function GameScreen({
  currentPlayer,
  player1roll,
  player2roll,
  rollDice,
  winner,
  playnNextRound,
  rounds,
}) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        margin: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>2-Player Dice Game</h1>
      <h4>
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>
          {" "}
          Player {currentPlayer()}{" "}
        </span>
        is rolling the dice...
      </h4>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <Player
          title={"Player 1"}
          index={player1roll}
          handleClick={rollDice}
          isDisabled={currentPlayer() === 2}
        />

        <div style={{ fontSize: "40px" }}>VS</div>

        <Player
          title={"Player 2"}
          index={player2roll}
          handleClick={rollDice}
          isDisabled={currentPlayer() === 1 || player2roll !== null}
        />
      </div>
      {winner() && (
        <WinnerBanner
          winner={winner()}
          onPlayAgain={playnNextRound}
          rounds={rounds}
        />
      )}
    </div>
  );
}
