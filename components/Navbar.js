import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

function Navbar() {
  return (
    <>
      <nav className={styles.mainnav}>
          <h1 className={styles.logo}>NextBlog</h1>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
