import React, { useContext } from "react";
import DashboardContext from "../../../context/context";
import Dashboard from "../../Dashboard/Dashboard";
import Team from "../../Dashboard/Team";
import Projects from "../../Dashboard/Projects";
import Calender from "../../Dashboard/Calender";
import styles from "./ContentCard.module.css";

export default function ContentCard() {
  const { activeLink } = useContext(DashboardContext);

  const renderData = () => {
    if (activeLink === "dashboard") {
      return <Dashboard />;
    } else if (activeLink === "team") {
      return <Team />;
    } else if (activeLink === "projects") {
      return <Projects />;
    } else if (activeLink === "calender") {
      return <Calender />;
    }
  };

  return <div className={styles["content-card"]}>{renderData()}</div>;
}
