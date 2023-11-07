import { forwardRef } from 'react'
import './FeaturedProjects.css'
import ProjectCard from './ProjectCard.js'

const FeaturedProjects = () => {
    const featured = ["ray-clone"]
    const featured_projects = featured.map((title, index) => {
        return <ProjectCard title={title} showThumbnail={true} key={index}/>
    })

    return (
        <div className="featured_projects_container">
            <div className="featured_projects_title">
                Featured Projects
            </div>
            <hr className="projectHR"></hr>
            <div className="projects" id="projects">
                {featured_projects}
            </div>
        </div>
    )
}

export default forwardRef(FeaturedProjects);