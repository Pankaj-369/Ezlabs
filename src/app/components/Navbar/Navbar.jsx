"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <Image
        src="/assets/logo.png"
        width={90}
        height={40}
        alt="Logo overlay"
        aria-hidden="true"
        className={styles.logo}
      />
      <button
        className={styles.hamburger}
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <ul
        className={`${styles.navLinks} ${open ? styles.open : ""}`}
        onClick={() => setOpen(false)}
      >
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#their-stories">Their Stories</a>
        </li>
        <li>
          <a href="#our-story">Our Story</a>
        </li>
        <li>
          <a href="#varnan">Varnan</a>
        </li>
        <li>
          <a href="#talk" className={styles.talkBtn}>
            Let’s Talk
          </a>
        </li>
      </ul>
    </nav>
  );
}
