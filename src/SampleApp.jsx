// import { useState } from "react";

// const INITIAL_ARRAY = ["A", "B", "C"];

// function App() {
//   const [array, setArray] = useState(["A", "B", "C"]);
//   const [value, setValue] = useState("");

//   function removeFirst() {
//     setArray((existingArray) => {
//       return existingArray.slice(1);
//     });
//   }

//   function removeLetter() {
//     setArray((existingArray) => {
//       return existingArray.filter((letter) => letter !== "B");
//     });
//   }

//   function addLetterToStart() {
//     setArray((existingArray) => {
//       return ["P", ...existingArray];
//     });
//   }

//   function addLetterToEnd() {
//     setArray((existingArray) => {
//       return [...existingArray, "Z"];
//     });
//   }

//   function clearArray() {
//     setArray([]);
//   }

// function resetArray() {
//   setArray(INITIAL_ARRAY);
// }

// function updateAtoN() {
//   setArray((existingArray) => {
//     return existingArray.map((letter) => {
//       if (letter === "A") {
//         return "N";
//       } else {
//         return letter;
//       }
//     });
//   });
// }

// function addInputValue() {
// const inputValue = prompt("Enter a letter");
//     <input type="text" />;
//     setArray((existingArray) => {
//       return [value, ...existingArray];
//     });
//   }

//   return (
//     <div>
//       <button onClick={removeFirst}>Remove First Index</button>
//       <br />
//       <button onClick={removeLetter}>Remove B From Array</button>
//       <br />
//       <button onClick={addLetterToStart}>Add Letter to Start of Array</button>
//       <br />
//       <button onClick={addLetterToEnd}>Add Letter to End of Array</button>
//       <br />
//       <button onClick={clearArray}>Clear the Array</button>
//       <br />
//       <button onClick={resetArray}>Set Array to Initial Value</button>
//       <br />
//       <button onClick={updateAtoN}>Update All As to Ns</button>
//       <br />
//       <br />
//       <input value={value} onChange={(event) => setValue(event.target.value)} />
//       <br />
//       <button onClick={() => addInputValue(value)}>
//         Add Input to Start of Array
//       </button>
//       <br />
//       <br />
//       {array.join(", ")}
//     </div>
//   );
// }

// export default App;
