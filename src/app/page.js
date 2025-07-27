import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/*<Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />*/}
      <h1 className={styles.header}>Welcome to Felipes Site!</h1>
      <Link href="/about" className={styles.pageLink}>
        About
      </Link>
      <Link href="/tattooing" className={styles.pageLink}>
        Tattooing
      </Link>
      <Link href="/sketchbook" className={styles.pageLink}>
        Sketchbook
      </Link>
      <Link href="/store" className={styles.pageLink}>
        Store
      </Link>
    </main>
  );
}
