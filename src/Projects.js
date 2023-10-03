import { forwardRef } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard.js'

const Projects = (_, ref) => {
    return (
        <div ref={ref} className="projects" id="projects">
            {/* <ProjectCard /> */}
            <ProjectCard title="hi"/>
        </div>
    )
}

export default forwardRef(Projects);