import { useState } from "react";
import { SampleCounter } from "./sampleCounter";

export default function App() {
  const [count, setCount] = useState(0);

  function changeCount(amount) {
    setCount((c) => c + amount);
  }

  function reset() {
    setCount(0);
  }

  return (
    <SampleCounter count={count} changeCount={changeCount} reset={reset} />
  );
}
