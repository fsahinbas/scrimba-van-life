import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import About from "../../pages/about/About";
import Vans from "../../pages/vans/Vans";
const header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>#VANLIFE</p>
      <nav className={styles.nav}>
        <Link to="/about" element={<About />} className={styles.link}>
          About
        </Link>
        <Link to="/vans" element={<Vans />} className={styles.link}>
          Vans
        </Link>
      </nav>
    </header>
  );
};

export default header;
