import { useContext } from "react";
import { NavLink } from "react-router-dom";
import DashboardContext from "../../../context/context";
import icons from "../../../utils/icons";
import toUppercaseWord from "../../../utils/utils";
import styles from "./LeftSidebar.module.css";

export default function LeftSidebar() {
  const { data } = useContext(DashboardContext);

  return (
    <section className={styles.leftSidebar}>
      <ul>
        {Object.keys(data)?.map((link, idx) => (
          <NavLink
            to={`/${link}`}
            key={link}
            className={({ isActive, isPending }) => {
              return isActive
                ? `${styles["leftSidebar-link"]} ${styles["leftSidebar-link-active-link"]}`
                : `${styles["leftSidebar-link"]}`;
            }}
          >
            <span className={styles["icon"]}>{icons[idx]}</span>
            {toUppercaseWord(link)}
          </NavLink>
        ))}
      </ul>
    </section>
  );
}
