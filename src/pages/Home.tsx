import React from 'react'
import styles from "../styles/home.module.scss"

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.aboutMeContainer}>
        <h2>Hi, My Name is Dmitry!</h2>
        <div className={styles.prompt}>
          <p>
            A software developer with a passion for learning and creating.
          </p>
        </div>
      </div>
      <div className={styles.skillsContainer}> 
        <h1>Skills</h1>
        <ol className={styles.skillsList}>
          <li className={styles.skillsItem}>
            <h2>Programming Languages</h2>
            <span>TypeScript, Javascript, Python</span>
          </li>
          <li className={styles.skillsItem}>
            <h2>Front-End</h2>
            <span>HTML, CSS, React, Next.js, Redux, SASS</span>
          </li>
          <li className={styles.skillsItem}>
            <h2>Back-End</h2>
            <span>Nest.js, Express.js, MySQL, PostgreSQL, MongoDB, different ORMs, Docker, Kubernetes</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home