import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Router>
        {" "}
        {}
        <App />
      </Router>
    </React.StrictMode>
  );
});
