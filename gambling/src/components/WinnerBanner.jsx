export default function WinnerBanner({ winner, onPlayAgain, rounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}) {
  return (
    <div style={{
        backgroundColor: winner === "tie" ? "#FFA500" : "#4CAF50",
        color: "white",
        padding: "40px 60px",
        borderRadius: "20px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
        textAlign: "center",
        minWidth: "300px"
      }}
    >
      <div style={{
        fontSize: "18px",
        fontWeight: "700",
        marginBottom: "6px"
      }}>
        Winner of Round {rounds[0]}
      </div>

      <h2 style={{ margin: "0 0 20px 0", fontSize: "36px" }}>{winner}</h2>

      <button
        onClick={onPlayAgain}
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          fontSize: "18px",
          backgroundColor: "white",
          color: winner === "tie" ? "#FFA500" : "#4CAF50",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        🎲 Play Again
      </button>
    </div>
  );
}
