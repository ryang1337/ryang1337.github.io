import './ProjectTagPage.css'
import { Projects } from './ProjectMap.js'
import ProjectCard from './ProjectCard'
import { useLoaderData } from "react-router-dom"

export const loader = () => {
    return {}
}

const ProjectTagPage = () => {
    const { _ } = useLoaderData()
    console.log('hi')
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (serachParams, prop) => serachParams.get(prop)
    })

    const tags = decodeURIComponent(params.tags).split(",")

    let filteredProjects;

    if(tags[0] === 'null'){
        filteredProjects = Projects
    }else{
        filteredProjects = Projects.filter((project) => {
            return tags.filter(tag => project.tags.includes(tag)).length !== 0
        })
    }

    const projects = filteredProjects.map((proj, index) => {
        return <ProjectCard title={proj.id} key={index}/>
    })

    return (
        <div className="project_tag_page_container">
            <div className="tagged_projects">
                {projects}
            </div>
        </div>
    )
}

export default ProjectTagPage