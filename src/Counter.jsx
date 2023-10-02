import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  //   function handleClick() {
  //     setCount(count + 1);
  //   }

  //   setCount((currentCount) => {
  //     return currentCount + 1;
  //   });

  return (
    <h1 onClick={() => setCounter((currentCount) => currentCount + 1)}>
      Increment: {counter}
    </h1>
  );
}
