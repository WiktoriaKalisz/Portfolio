import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Wiktoria</h1>
    <p className={styles.description}>
        I'm a full stach developer. Blaaaaaaaaaa aaaaaaa blablabalbalbablabla
    </p>
    <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
  );
};
