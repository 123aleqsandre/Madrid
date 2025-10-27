import Player from "./components/Player";

function App() {
  const dicetmojis = ["🐺", "🐻", "🦁", "🐢", "🐊", "🐉"]
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
        <Player title={"player 1"}/>

        <div>VS</div>

        <Player title={"player 2"}/>
      </div>

    </div>
  );
}

export default App;
