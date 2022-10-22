import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DashboardState from "./context/DashboardState";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DashboardState>
        <App />
      </DashboardState>
    </QueryClientProvider>
  </React.StrictMode>
);
