import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import About from "../../pages/about/About";
import Vans from "../../pages/vans/Vans";
import Dashboard from "../../pages/host/dashboard/Dashboard";
const header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        #VANLIFE
      </Link>
      <nav className={styles.nav}>
        <Link to="/host" element={<Dashboard />} className={styles.link}>
          Host
        </Link>
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
