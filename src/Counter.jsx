import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  //   function handleClick() {
  //     setCount(count + 1);
  //   }

  //   setCount((currentCount) => {
  //     return currentCount + 1;
  //   });

  return (
    <h1 onClick={() => setCount((currentCount) => currentCount + 1)}>
      Increment: {count}
    </h1>
  );
}
