import React from "react";

import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.form} id="contact">
      <h2 className={styles.form__title}>Say Hello!</h2>
      <form action="" name="contact">
        <div className={styles.form__group}>
          <input
            type="text"
            form="contact"
            className={styles.form__field}
            placeholder="Your Name"
            id="name"
          />
          <label htmlFor="name" className={styles.form__label}>
            Name
          </label>
        </div>

        <div className={styles.form__group}>
          <input
            type="text"
            form="contact"
            className={styles.form__field}
            placeholder="Email Address"
            id="email"
          />
          <label htmlFor="email" className={styles.form__label}>
            Email
          </label>
        </div>

        <div className={styles.form__group}>
          <textarea
            type="text"
            form="contact"
            rows="10"
            className={styles.form__field}
            placeholder="Your Message"
            id="message"
          />
          <label htmlFor="message" className={styles.form__label}>
            Your Message...
          </label>
        </div>

        <input
          type="submit"
          className={styles.form__submit}
          value="Send!"
          onClick={submitContactForm}
        />
      </form>
    </div>
  );
}

function submitContactForm(e) {
  console.log(e);
  e.preventDefault;
}
