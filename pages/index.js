import Head from "next/head";
import Card from "../components/Card";
import styles from "../styles/Home.module.scss";
import expansions from "../expansions";

const Home = () => (
  <>
    <Head>
      <title>Joseph Lyman | Web Developer & Grahpic Designer</title>
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
        <h2 className={styles.sectionTitle} id="resume">
          Resume
        </h2>
        <div className={styles.resume}>Resume goes here, lol.</div>
      </section>

      {/* ===== Contact ===== */}
      <section className={`${styles.contact} ${styles.test}`}>
        <div className={styles.form__group} id="contact">
          <h2 className={styles.form__title}>Say Hello!</h2>
          <form action="">
            <input
              type="text"
              className={styles.form__field}
              placeholder="Your Name"
              id="name"
            />
            <label htmlFor="name" className={styles.form__label}>
              Name
            </label>

            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </section>
    </main>
  </>
);

export default Home;

function changeJML(e) {
  const randomJML = Math.floor(Math.random() * expansions.length);
  e.target.innerHTML = `<h1>${expansions[randomJML]}</h1>`;
}
