import React, {useState} from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        
            <h1 className={styles.title}>ABOUT</h1>
            <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Full image of me" className={styles.fullMeImg}/>
        
        <ul className={styles.points}>
            <li className={styles.point}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Full image of me" className={styles.cursorImg}/>
                <div className={styles.pointContent}>
                    <h1 className={styles.title2}>Frontend Developer</h1>
                    <p className={styles.description}>
                        Lalal allal aa alala lallaa alalala lalal laal lalalal alalal alalallala
                    </p>
                </div>
            </li>
            <li className={styles.point}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Full image of me" className={styles.serverImg}/>
                <div className={styles.pointContent}>
                    <h2 className={styles.title2}>Backend Developer</h2>
                    <p className={styles.description}>
                        Fafafafaa farafaa  fafafafafa affafafa fafafa rarararara fafafafafa
                    </p>
                </div>
            </li>
            <li className={styles.point}>
                <img src={getImageUrl("about/uiIcon.png")} alt="Full image of me" className={styles.directoryImg}/>
                <div className={styles.pointContent}>
                    <h2 className={styles.title2}>UI Designer</h2>
                    <p className={styles.description}>
                        TUU TUTUT URUtut ututut tut utututu ttu tututt rururtu tutu
                    </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
