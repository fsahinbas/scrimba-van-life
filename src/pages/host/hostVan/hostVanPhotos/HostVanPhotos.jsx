import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./hostVanPhotos.module.css";

const HostVanPhotos = () => {
  const { van } = useOutletContext();
  return (
    <section>
      <img src={van.imageUrl} alt={van.name} />
    </section>
  );
};

export default HostVanPhotos;
