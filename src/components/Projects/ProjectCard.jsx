import { getImageUrl } from '../../utils'
import styles from "./ProjectCard.module.css"

export const ProjectCard = ({project : {title,imageSrc,description,skills,demo,source}}) => {
  return (
    <div className={styles.container} data-testid="project-card">
    <a href={demo} target="_blank" rel="noopener noreferrer">
      <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />
    </a>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <ul className={styles.skills}>
        {skills.map((skill,id)=> {return <li className={styles.skill} key={id}>{skill}</li>})}
    </ul>
    <div className={styles.links}>
        <a className={styles.link} href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
        <a className={styles.link} href={source} target="_blank" rel="noopener noreferrer">Source</a>
    </div>
  </div>
  )
}
