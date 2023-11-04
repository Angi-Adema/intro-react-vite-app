// import { useMemo, useState } from "react";

// export default function App() {
//   // Here, if we update our items then we also have to update our filteredItems which means we are storing state that is dependent on another form of state. We will comment out the filteredItems state and show what we should do instead.
//   const [items, setItems] = useState([1, 2, 3, 4, 5]);
//   //   const [filteredItems, setFilteredItems] = useState(items);
//   const [inputValue, setInputValue] = useState("");

//   // Get rid of this in order to demonstrate storing state correctly.
//   //   function updateFilteredItems(e) {
//   //     if (e.target.value === "") {
//   //       setFilteredItems(items);
//   //     } else {
//   //       setFilteredItems(items.filter((item) => item < e.target.valueAsNumber));
//   //     }
//   //   }

//   // If this is running slowly, we can add useMemo here to optimize the code and only run the filter function when the items or inputValue changes. Only use in instances where the list is very large or this is running super slow, do NOT want to overuse useMemo.
//   const filteredItems = useMemo(() => {
//     return inputValue === ""
//       ? items
//       : items.filter((item) => item < inputValue);
//   }, [items, inputValue]); // Changes any time our items or input value changes.

//   return (
//     <>
//       <label htmlFor="lessThan">Show Less Than</label>
//       <input
//         id="lessThan"
//         type="number"
//         onChange={(e) => setInputValue(e.target.valueAsNumber)}
//         value={inputValue}
//       />
//       <br />
//       <br />
//       <div>{filteredItems.join(", ")}</div>
//       <br />
//       <button onClick={() => setItems((i) => [...i, 2.5])}>
//         Add 2.5 To List
//       </button>
//     </>
//   );
// }
