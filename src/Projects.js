import { forwardRef } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard.js'

const Projects = (_, ref) => {
    return (
        <div>
            <div ref={ref} className="title">
                Projects
            </div>
            <hr className="projectHR"></hr>
            <div className="projects" id="projects">
                <ProjectCard title="ray-clone"/>
            </div>
        </div>
    )
}

export default forwardRef(Projects);