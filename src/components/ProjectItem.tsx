import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "../styles/projectItem.module.scss"

type Props = {
    id: number;
    image: string;
    name: string;
}

const ProjectItem: FC<Props> = ({id, image, name}) => {
  const navigate = useNavigate()
  return (
    <div className={styles.projectItemContainer} onClick={() => navigate(`/projects/${id}`)}>
        <div style={{backgroundImage: `url(${image})`}} className={styles.projectImage}></div>
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem