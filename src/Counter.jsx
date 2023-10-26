import { useReducer, useState } from "react";

function reducer(count, action) {
  switch (count.type) {
    case "DECREMENT":
      return count - 1;
    default:
      return count;
  }
}

export function Counter({ initialCount = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialCount);

  return (
    <>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
}
