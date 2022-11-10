import {useParams} from "react-router-dom"
import { ProjectsList } from "../helpers/ProjectsList"
import styles from "../styles/projectDescription.module.scss"
import {BsGithub} from "react-icons/bs"

const ProjectDescription = () => {
    const {id} = useParams()
    const projectId = parseInt(id!)
    const currentProject = ProjectsList[projectId]
    
    return (
        <div className={styles.projectDescContainer}>
            <h1>{currentProject.name}</h1>
            <img src={currentProject.image} />
            <p>Skills: JavaScript, HTML, CSS</p>
            <BsGithub size={54} />
        </div>
    )
}

export default ProjectDescription