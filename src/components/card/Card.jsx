import React from "react";
import styles from "./card.module.css";
const Card = () => {
  return (
    <div className={styles.card}>
      <img src="../../assets/images/thumbs/van_1.png" />
      <div className={styles.content}>
        <h3>Modest Explorer</h3>
        <p>
          $60<span>/day</span>
        </p>
      </div>
      <div className={`${styles.btn} ${styles.simple}`}>Simple</div>
    </div>
  );
};

export default Card;
