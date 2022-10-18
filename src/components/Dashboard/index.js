import Content from "../Sidebars/Content";
import LeftSidebar from "../Sidebars/LeftSidebar";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <LeftSidebar />
      <Content />
    </div>
  );
}
