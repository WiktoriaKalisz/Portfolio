import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
      <>
      <div className={styles.waveTopWrapper}>
        <svg
          className={styles.wave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ backgroundColor: "#383537" }}          
        >
          <path
            fill="#E7E7E7"
            fillOpacity="1"
            d="M0,224L30,224C60,224,120,224,180,197.3C240,171,300,117,360,133.3C420,149,480,235,540,245.3C600,256,660,192,720,186.7C780,181,840,235,900,213.3C960,192,1020,96,1080,74.7C1140,53,1200,107,1260,117.3C1320,128,1380,96,1410,80L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        </div>
        <footer id="contact" className={styles.container}>
          <div>
          <h1>Contact</h1>
            <p className={styles.subtitle}>Feel free to reach out!</p>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a href="mailto:myemail@email.com" target="_blank" rel="noopener noreferrer">wiktoria.kalisz.1999@gmail.com</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
              <a href="https://www.linkedin.com/in/wiktoriakalisz/" target="_blank" rel="noopener noreferrer">linkedin.com/in/wiktoriakalisz</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
              <a href="https://github.com/WiktoriaKalisz" target="_blank" rel="noopener noreferrer">github.com/WiktoriaKalisz</a>
            </li>
          </ul>
        </footer>
      </>
    );
  };
  