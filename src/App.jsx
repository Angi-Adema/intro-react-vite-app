import { useEffect, useState, useRef } from "react";
// import { User } from "./User";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef.current.value);
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label>
        Name:
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </>
  );
}

export default App;
