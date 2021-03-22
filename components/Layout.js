import React from "react";
import Navigation from "../components/Navigation";
import styles from "../styles/Layout.module.scss";

export default function Layout(props) {
  return (
    <div className={styles.app} id="top">
      <Navigation />

      <div className={styles.content}>
        <>{props.children}</>
        <a className={styles.top} href="#top">
          {/*<img src="../assets/up.png" alt="Scroll to Top" />*/}
          <img src="../assets/up.png" alt="Scroll to Top" />
        </a>
      </div>

      <footer className={styles.footer}>
        <p>Created by Joseph Lyman with ❤️ and ☕️</p>
      </footer>
    </div>
  );
}
