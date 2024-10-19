import React from "react";
import styles from "./home.module.css";
const Home = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        You got the travel plans, we got the travel vans.
      </h1>
      <p className={styles.description}>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <div className={styles.btn}>Find your van</div>
    </main>
  );
};

export default Home;
