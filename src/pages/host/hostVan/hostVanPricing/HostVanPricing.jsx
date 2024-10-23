import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./hostVanPricing.module.css";
const HostVanPricing = () => {
  const { van } = useOutletContext();
  return (
    <section>
      <p className={styles.price}>
        ${van.price}
        <span>/day</span>
      </p>
    </section>
  );
};

export default HostVanPricing;
