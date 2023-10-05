import { forwardRef } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard.js'

const Projects = ({lightMode}, ref) => {
    return (
        <div>
            <div ref={ref} className="title">
                Projects
            </div>
            <hr className="projectHR"></hr>
            <div className="projects" id="projects">
                <ProjectCard title="Ray Clone" desc="A distributed runtime for parallelizing C++ jobs based on Anyscale's Ray Core open source library." completeDate="" tags={["C++", "Distributed Computing"]} lightMode={lightMode} isCodeBlock={true}/>
            </div>
        </div>
    )
}

export default forwardRef(Projects);