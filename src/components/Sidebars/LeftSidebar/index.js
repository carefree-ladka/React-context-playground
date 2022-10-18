import { useContext } from "react";
import DashboardContext from "../../../context/context";
import icons from "../../../utils/icons";
import toUppercaseWord from "../../../utils/utils";
import styles from "./LeftSidebar.module.css";

export default function LeftSidebar() {
  const { data, setActiveLink, activeLink } = useContext(DashboardContext);

  const handleLinkClick = (item) => setActiveLink(item);

  return (
    <section className={styles.leftSidebar}>
      <ul>
        {Object.keys(data)?.map((link, idx) => (
          <li
            key={link}
            className={
              activeLink === link
                ? `${styles["leftSidebar-link"]} ${styles["leftSidebar-link-active-link"]}`
                : `${styles["leftSidebar-link"]}`
            }
            onClick={() => handleLinkClick(link)}
          >
            <span className={styles["icon"]}>{icons[idx]}</span>
            {toUppercaseWord(link)}
          </li>
        ))}
      </ul>
    </section>
  );
}
