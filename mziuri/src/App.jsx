import { useState } from "react";
import counterButton from "./components/counterButton"

function App() {
  const[counter, setCounter] = useState(0)
  const projectName = "clicker-game";

  
  return (
    <>
      <h1>{projectName}</h1>
      <h2>counter: {counter}</h2>
      <counterButton title={"up"}/>
      <counterButton title={"dawn"}/>
    </>
  );
}

export default App;
