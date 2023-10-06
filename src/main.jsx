import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Removed the React.StrictMode for now so that it is not logging results twice in the dev tools. Just uncomment to add them back in.
