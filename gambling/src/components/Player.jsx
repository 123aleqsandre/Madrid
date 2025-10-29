export default function Player({ title, num, handleClick, isDisabled }) {
  const dicetmojis = ["🐺", "🐻", "🦁", "🐢", "🐊", "🐉"];

  return (
    <div>
      <h3> {title} </h3>
      <div style={{ fontSize: "60px" }}>{dicetmojis[num - 1]}</div>
      <button onClick={handleClick} disabled={isDisabled}>
        Gambling
      </button>
    </div>
  );
}
