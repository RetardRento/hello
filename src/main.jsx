import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Page from "./components/page";

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
