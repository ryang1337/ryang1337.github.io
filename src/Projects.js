import { forwardRef } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard.js'

const Projects = ({_, ref, lightMode}) => {
    return (
        <div>
            <div className="title">
                Projects
            </div>
            <hr className="projectHR"></hr>
            <div ref={ref} className="projects" id="projects">
                <ProjectCard title="Ray Clone" desc="A distributed runtime for parallelizing C++ jobs based on Anyscale's Ray Core open source library." completeDate="" tags={["C++", "Distributed Computing"]} lightMode={lightMode}/>
            </div>
        </div>
    )
}

export default forwardRef(Projects);