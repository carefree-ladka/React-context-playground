import React, { useContext } from "react";
import DashboardContext from "../../../context/context";
import Dashboard from "../../Dashboard/DashboardRoute";
import Team from "../../Dashboard/Team";
import Projects from "../../Dashboard/Projects";
import Calender from "../../Dashboard/Calender";
import styles from "./ContentCard.module.css";
import { Outlet } from "react-router-dom";

export default function ContentCard() {
  return (
    <div className={styles["content-card"]}>
      <Outlet />
    </div>
  );
}
