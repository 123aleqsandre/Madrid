import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setplayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleEditNameChange(event) {
    setplayerName(event.target.Value);
  }

  let player = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    player = (
      <input
        type="text"
        required
        Value={name}
        onChange={handleEditNameChange}
      />
    );
  }

  return (
    <li>
      <span className="player">
        {player}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
