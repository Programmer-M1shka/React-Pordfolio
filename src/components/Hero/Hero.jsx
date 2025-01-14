import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Misho</h1>
        <p className={styles.description}>
        ⚡| Full Stack Developer |💻 create innovative and functional websites and applications by synthesizing Frontend and Backend technologies.
        📌Html | Css | Java Script | Angular | C# | SQL| 
        📬 I am open to working on new opportunities and technological challenges.
        </p>
        <a href="xaritona12@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile.avif")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
