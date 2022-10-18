import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DashboardState from "./context/DashboardState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DashboardState>
      <App />
    </DashboardState>
  </React.StrictMode>
);
