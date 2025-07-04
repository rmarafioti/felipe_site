import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <article>
        {/*<Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />*/}
        <h1 className={styles.header}>Welcome to Felipes Site!</h1>
        <Link href="/about">
          <p className={styles.pageLink}>About</p>
        </Link>
        <Link href="/tattooing">
          <p className={styles.pageLink}>Tattooing</p>
        </Link>
        <Link href="/sketchbook">
          <p className={styles.pageLink}>Sketchbook</p>
        </Link>
        <Link href="/store">
          <p className={styles.pageLink}>Store</p>
        </Link>
      </article>
    </main>
  );
}
