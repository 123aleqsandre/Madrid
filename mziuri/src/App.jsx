import { useState } from "react";
import CounterButton from "./components/CounterButton";
import CounterDisplay from "./components/CounterDisplay";
import Header from "./components/Header";
import Message from "./components/Message";
// import ResetButton from "./components/ResetButton"

function App() {
  const [counter, setCounter] = useState(0);
  const projectName = "clicker-game";
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <>
      <Header ProName={projectName} />
      <CounterDisplay count={counter} />
      <Message count={counter} />

      <CounterButton
        title={"up"}
        handleClick={() => {
          setCounter(counter + 1);
        }}
      />
      <CounterButton
        title={"dawn"}
        handleClick={() => {
          setCounter(counter - 1);
        }}
      />
      <ResetButton title="Reset" ResetClick={handleReset} />
    </>
  );
}

export default App;
