import './ProjectPage.css'
import { ProjectTitleMap } from './ProjectMap.js'
import { useLoaderData } from 'react-router-dom'

export const loader = ({ params }) => {
    const project = ProjectTitleMap[params.projectTitle]
    return { project }
}

const ProjectPage = () => {
    const { project } = useLoaderData()

    return (
        <div>
            { project.title }
        </div>
    )
}

export default ProjectPage