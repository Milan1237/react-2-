import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Global } from "./Global/GlobalValue.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Global>
      <App />
    </Global>
  </StrictMode>
);
