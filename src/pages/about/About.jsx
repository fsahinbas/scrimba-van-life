import React from "react";
import styles from "./about.module.css";
const About = () => {
  return (
    <section className={styles.about}>
      <img src="../../assets/images/about-hero.png" />
      <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
      <div className={styles.content}>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
          <br />
          (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>

      <div className={styles.banner}>
        <p>Your destination is waiting. Your van is ready.</p>
        <div className={styles.btn}>Explore our vans</div>
      </div>
    </section>
  );
};

export default About;
