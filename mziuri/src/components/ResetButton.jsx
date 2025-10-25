function ResetButton({ title, ResetClick }) {
  return (
    <button
    style={{
        margin: "5px",
        padding: "10px 20px",
        curso: "pointer",
        borderRadius: "8px",
      }}
    onClick={ResetClick}
    >
      {title}
    </button>
  );
}
