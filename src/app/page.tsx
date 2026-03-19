import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner />
        <CardPanel />
      </main>
    </div>
  );
}
