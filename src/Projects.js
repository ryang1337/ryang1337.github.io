import { forwardRef } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard.js'

const Projects = (_, ref) => {
    return (
        <div ref={ref} className="projects" id="projects">
            hi
            {/* <ProjectCard /> */}
        </div>
    )
}

export default forwardRef(Projects);