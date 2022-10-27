import styles from "./ContentCard.module.css";
import { Outlet } from "react-router-dom";

export default function ContentCard() {
  return (
    <div className={styles["content-card"]}>
      <Outlet />
    </div>
  );
}
