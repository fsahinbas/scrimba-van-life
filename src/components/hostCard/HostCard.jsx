import React from "react";
import styles from "./hostCard.module.css";
import { Link } from "react-router-dom";
const HostCard = ({ ...props }) => {
  return (
    <div className={styles.card}>
      <Link to={`/host/vans/${props.id}`}>
        <img src={props.imageUrl} alt={props.name} className={styles.image} />
        <div>
          <h3 className={styles.name}>{props.name}</h3>
          <p className={styles.price}>${props.price}/day</p>
        </div>
      </Link>
    </div>
  );
};

export default HostCard;
