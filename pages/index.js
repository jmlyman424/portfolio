import Head from "next/head";
import Card from "../components/Card";
import Contact from "../components/Contact";
import Resume from "../components/Resume";

import styles from "../styles/Home.module.scss";
import expansions from "../expansions";

const Home = () => (
  <>
    <Head>
      <title>Joseph Lyman | Web Developer & Graphic Designer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <h1 onClick={changeJML}>Joseph M Lyman</h1>
        <p>Web Developer | Graphic Designer</p>
      </section>

      <img
        className={styles.graphic}
        src="./assets/design-card.png"
        alt="Design Card"
      />

      {/* ===== Projects ===== */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle} id="projects">
          Projects
        </h2>
        <div className={styles.projectList}>
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      {/* ===== Resume ===== */}
      <section className={styles.section}>
        <Resume />
      </section>

      {/* ===== Contact ===== */}
      <section className={styles.contact}>
        <Contact />
      </section>
    </main>
  </>
);

export default Home;

function changeJML(e) {
  const randomJML = Math.floor(Math.random() * expansions.length);
  e.target.innerHTML = `<h1>${expansions[randomJML]}</h1>`;
}
