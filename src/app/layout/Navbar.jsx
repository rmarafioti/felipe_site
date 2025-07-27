"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <Link href="/about" className={styles.pageLink}>
          About
        </Link>
        <Link href="/tattooing" className={styles.pageLink}>
          Tattooing
        </Link>
        <Link href="/" className={styles.pageLink}>
          Home
        </Link>
        <Link href="/sketchbook" className={styles.pageLink}>
          Sketchbook
        </Link>
        <Link href="/store" className={styles.pageLink}>
          Store
        </Link>
      </nav>

      <nav className={styles.mobileNav}>
        {/*hamburger menu*/}
        <div id={styles.hamMenuContainer} onClick={toggleMenu}>
          <div
            className={`${styles.menuButtonBurger} ${
              menuOpen ? styles.open : ""
            }`}
          ></div>
        </div>
      </nav>

      {/* mobile menu */}
      <menu
        className={`${styles.menu} ${menuOpen ? styles.active : ""}`}
        aria-label="Mobile Navigation"
      >
        <div>
          <Link href="/" role="heading" className={styles.pageLink}>
            Home
          </Link>
        </div>
        <div>
          <Link href="/about" role="heading" className={styles.pageLink}>
            About
          </Link>
        </div>
        <div>
          <Link href="/tattooing" role="heading" className={styles.pageLink}>
            Tattooing
          </Link>
        </div>
        <div>
          <Link href="/sketchbook" role="heading" className={styles.pageLink}>
            Sketchbook
          </Link>
        </div>
        <div>
          <Link href="/store" role="heading" className={styles.pageLink}>
            Store
          </Link>
        </div>
      </menu>
    </>
  );
}
