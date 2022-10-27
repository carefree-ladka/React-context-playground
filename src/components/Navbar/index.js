import useDashboard from "../../hooks/useDashboard";
import Button from "../Button";
import styles from "./Navbar.module.css";
export default function Navbar() {
  const { setInViewMode, isInViewMode } = useDashboard();

  return (
    <header>
      <nav>
        <div className={styles["navbar-content"]}>
          <h3>React Context Playground</h3>
          <Button
            className={styles.button}
            text={isInViewMode ? "Switch to Edit Mode" : "Switch to View Mode"}
            setInViewMode={setInViewMode}
          />
        </div>
      </nav>
    </header>
  );
}
