import React from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className={styles.card}>
      <Link to={`/vans/${props.id}`} className={styles.link}>
        <img src={props.imageUrl} />
        <div className={styles.content}>
          <h3>{props.name}</h3>
          <p>
            ${props.price}
            <span>/day</span>
          </p>
        </div>
        <div className={`${styles.btn} ${props.type}`}>{props.type}</div>
      </Link>
    </div>
  );
};

export default Card;
