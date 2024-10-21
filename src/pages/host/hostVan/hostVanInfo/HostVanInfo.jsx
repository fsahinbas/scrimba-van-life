import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./hostVanInfo.module.css";
const HostVanInfo = () => {
  const { van } = useOutletContext();
  return (
    <section className={styles.info}>
      <div>
        <span>Name:</span>&nbsp;
        <span>{van.name}</span>
      </div>
      <div>
        <span>Category:</span>&nbsp;
        <span style={{ textTransform: "capitalize" }}>{van.type}</span>
      </div>
      <div>
        <span>Description:</span>&nbsp;
        <span>{van.description}</span>
      </div>
      <div>
        <span>Visibility:</span>&nbsp;
        <span>public</span>
      </div>
    </section>
  );
};

export default HostVanInfo;
