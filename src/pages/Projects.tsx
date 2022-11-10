import React from 'react'
import styles from "../styles/projects.module.scss"
import ProjectItem from '../components/ProjectItem'
import { ProjectsList } from '../helpers/ProjectsList'

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.projectsTitle}>My Projects</h1>
      <div className={styles.projectsList}>
        {ProjectsList.map((project, index) => {
          return (
            <ProjectItem id={index} name={project.name} image={project.image} key={project.image} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects