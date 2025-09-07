import React, {useState} from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils';
import interests from "../../data/interests.json"

export const About = () => {
  return (
    <section className={styles.container} id="about">
            <h1 className={styles.title}>Interests</h1>
            <div className={styles.content}>
            <div className={styles.pointsGrid}>
  {interests.map((item, index) => (
    <div className={styles.point} key={index}>
      <img src={getImageUrl(item.imageSrc)} alt={item.alt} className={styles.cursorImg}/>
      <div className={styles.pointContent}>
        <h2 className={styles.title2}>{item.title}</h2>
        <p className={styles.description}>{item.description}</p>
      </div>
    </div>
  ))}
</div>
        </div>
    </section>
  )
}
