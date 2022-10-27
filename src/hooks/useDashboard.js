import { useContext } from "react";
import DashboardContext from "../context/context";

export default function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("Context not available");

  return ctx;
}
