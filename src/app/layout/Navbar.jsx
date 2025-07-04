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
        <Link href="/about">
          <p className={styles.pageLink}>About</p>
        </Link>
        <Link href="/tattooing">
          <p className={styles.pageLink}>Tattooing</p>
        </Link>
        <Link href="/">
          <p className={styles.pageLink}>Home</p>
        </Link>
        <Link href="/sketchbook">
          <p className={styles.pageLink}>Sketchbook</p>
        </Link>
        <Link href="/store">
          <p className={styles.pageLink}>Store</p>
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
          <Link href="/">
            <p className={styles.pageLink} role="heading">
              Home
            </p>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <p className={styles.pageLink} role="heading">
              About
            </p>
          </Link>
        </div>
        <div>
          <Link href="/tattooing">
            <p className={styles.pageLink} role="heading">
              Tattooing
            </p>
          </Link>
        </div>
        <div>
          <Link href="/sketchbook">
            <p className={styles.pageLink} role="heading">
              Sketchbook
            </p>
          </Link>
        </div>
        <div>
          <Link href="/store">
            <p className={styles.pageLink} role="heading">
              Store
            </p>
          </Link>
        </div>
      </menu>
    </>
  );
}
