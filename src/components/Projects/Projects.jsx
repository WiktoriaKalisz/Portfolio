import projects from "../../data/projects.json"
import { ProjectCard } from './ProjectCard';
import styles from "./Projects.module.css"

export const Projects = () => {
  return (
    <>
      <div className={styles.waveTopWrapper}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ backgroundColor: "#DEB472" }}>
          <path fill="#E7E7E7" d="M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,181.3C672,149,768,107,864,90.7C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </section>
      <div className={styles.waveTopWrapper}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ backgroundColor: "#383537" }}>
          <path fill="#DEB472" fillOpacity="1" d="M0,224L48,186.7C96,149,192,75,288,74.7C384,75,480,149,576,170.7C672,192,768,160,864,133.3C960,107,1056,85,1152,96C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
    </>
  )
}
