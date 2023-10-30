import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  return (
    <>
      <label htmlFor="lessThan">Show Less Than</label>
      <input id="lessThan" type="number" />
      <br />
      <br />
      <div>{items.join(", ")}</div>
      <br />
      <button onClick={() => setItems((i) => [...i, 2.5])}>
        Add 2.5 To List
      </button>
    </>
  );
}
