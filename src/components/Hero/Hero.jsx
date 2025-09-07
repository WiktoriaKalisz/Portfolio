import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <>
  <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Wiktoria</h1>
    <p className={styles.description}>
    Curious-minded developer with growing experience in front-end development — and a soft spot for thoughtful, beautifully crafted design. Quick to catch bugs and drawn to technologies like React, Next.js, and TypeScript. Eager to keep learning, collaborate closely, and help build clean, accessible UIs that feel just right.
    </p>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
  
  </section>
  <div className={styles.waveTopWrapper}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E7E7E7" fill-opacity="1" d="M0,128L48,160C96,192,192,256,288,250.7C384,245,480,171,576,154.7C672,139,768,181,864,197.3C960,213,1056,203,1152,208C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
  </>
  );
};
