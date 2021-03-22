import React from "react";
import styles from "../styles/Card.module.scss";

export default function Card() {
  return (
    <div className={styles.card}>
      <img src="../assets/SampleProject.png" alt="" />

      <div className={styles.card__info}>
        <h3 className={styles.card__type}>React.js</h3>
        <p className={styles.card__title}>Calorie Counter App</p>
      </div>
    </div>
  );
}
