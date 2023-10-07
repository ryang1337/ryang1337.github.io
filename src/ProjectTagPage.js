import './ProjectTagPage.css'
import { Projects } from './ProjectMap.js'

const ProjectTagPage = () => {
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

    return (
        <div>
            { filteredProjects.length }
        </div>
    )
}

export default ProjectTagPage