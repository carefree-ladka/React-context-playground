import { useContext } from "react";
import DashboardContext from "../../../context/context";
import bodyIcons from "../../../utils/bodyIcons";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const { data, isInViewMode } = useContext(DashboardContext);

  return (
    <>
      {data?.dashboard?.map((data, idx) => (
        <div key={data.id} className={styles["content-card-item"]}>
          <div className={styles["content-card-header"]}>
            <h3
              contentEditable={!isInViewMode}
              suppressContentEditableWarning={true}
            >
              {data?.headerText}
            </h3>
          </div>
          <div className={styles["content-card-item-amount"]}>
            <span className={styles["icon"]}>{bodyIcons[idx]}</span>
            <span>{data?.amount}</span>
          </div>
        </div>
      ))}
    </>
  );
}
