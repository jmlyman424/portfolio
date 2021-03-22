import React from "react";
import styles from "../styles/Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Home</li>
        <li>
          <a href="#projects">Portfolio</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
