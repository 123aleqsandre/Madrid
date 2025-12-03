export default function Log(gameturns) {
  return (<ol id="log">
    {gametunrs.map((turn)=>(
        <li>
            {turn.symbol} selected {turn.square.row + 1},{turn.square.col}
        </li>
    ))}
  </ol>);
}