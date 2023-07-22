import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    let timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
    }, 10000);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
