export default function players({name,symbol}){
    return (
          <li>
            <span className="player">
              <span className="player-name">{name}</span>
              <span className="player-symbol">{symbol}</span>
              <button>Edit</button>
            </span>
          </li>
)}