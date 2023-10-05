import './ProjectTagPage.css'
import { Projects } from './ProjectMap.js'
import { useLoaderData } from 'react-router-dom'

export const loader = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (serachParams, prop) => serachParams.get(prop)
    })

    const tags = decodeURIComponent(params.tags).split(",")

    if(tags[0] == 'null'){
        const filteredProjects = Projects
        return { filteredProjects }
    }

    const filteredProjects = Projects.filter((project) => {
        return tags.filter(tag => project.tags.includes(tag)).length != 0
    })

    console.log(filteredProjects)

    return { filteredProjects }
}

const ProjectTagPage = () => {
    const { filteredProjects } = useLoaderData()

    console.log(filteredProjects)

    return (
        <div>
            { filteredProjects.length }
        </div>
    )
}

export default ProjectTagPage