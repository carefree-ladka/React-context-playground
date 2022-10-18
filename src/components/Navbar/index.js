import { useContext } from "react";
import DashboardContext from "../../context/context";
import Button from "../Button";
import styles from "./Navbar.module.css";
export default function Navbar() {
  const { setInViewMode, isInViewMode } = useContext(DashboardContext);

  return (
    <header>
      <nav>
        <div className={styles["navbar-content"]}>
          <h3>React Context Playground</h3>
          <Button
            text={isInViewMode ? "Switch to Edit Mode" : "Switch to View Mode"}
            setInViewMode={setInViewMode}
          />
        </div>
      </nav>
    </header>
  );
}
