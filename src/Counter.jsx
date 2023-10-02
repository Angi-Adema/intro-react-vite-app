import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((currentCount) => currentCount + 1);
  }

  //   setCounter((currentCount) => {
  //     return currentCount + 1;
  //   });

  return (
    <h1 onClick={handleClick}>Increment: {counter}</h1>
    // <h1 onClick={() => setCounter((currentCount) => currentCount + 1)}>
    //   Increment: {counter}
    // </h1>
  );
}
