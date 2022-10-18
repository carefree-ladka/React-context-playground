import ContentCard from "./ContentCard";
import styles from "./Content.module.css";

export default function Content() {
  return (
    <section className={styles.content}>
      <ContentCard />
    </section>
  );
}
