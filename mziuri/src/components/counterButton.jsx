function CounterButton() {
  return (
    <button
      onClick={() => {
        setCounter(counter - 1);
      }}
      style={{
        margin: "5px",
        padding: "10px 20px",
        curso: "pointer",
        borderRadius: "8px",
      }}
    >
      Click to low
    </button>
  );
}
