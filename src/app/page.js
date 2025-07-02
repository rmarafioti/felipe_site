import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <article className={styles.page}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className={styles.header}>Welcome to Felipes Site!</h1>
        <p className={styles.pageLink}>About</p>
        <p className={styles.pageLink}>Tattooing</p>
        <p className={styles.pageLink}>Sketchbook</p>
        <p className={styles.pageLink}>Store</p>
      </article>
    </main>
  );
}
