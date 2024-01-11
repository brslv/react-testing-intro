import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { quotes } from "./quotes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App quotes={quotes} />
  </React.StrictMode>
);
