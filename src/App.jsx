import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item 1" },
    { id: crypto.randomUUID(), name: "Item 2" },
  ]);

  function addItem() {
    setItems((currentItems) => {
      return [...currentItems, { id: crypto.randomUUID(), name: "New Item" }];
    });
  }

  return (
    <>
      <button onClick={addItem}>Add Item</button>
      {/* .map() is converting the object into an array that React can use. Also the key has to be set inside the div tag and not inside the div itself as shown below.*/}
      <pre>
        {items.map((item) => {
          return (
            <div key={item.id}>
              {item.name}
              <input type="text" />
            </div>
          );
        })}
      </pre>
    </>
  );
}

export default App;
