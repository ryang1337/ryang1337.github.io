import './ProjectTagPage.css'
import { Projects, ProjectTags } from './ProjectMap.js'
import ProjectCard from './ProjectCard'
import { useLoaderData } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setFrom } from './fromSlice'
import { MultiSelect } from 'primereact/multiselect'
import { useLocation, useNavigate } from 'react-router-dom'

export const loader = () => {
    return {}
}

const ProjectTagPage = () => {
    const darkMode = useSelector((state) => state.darkMode.value)
    const from = useSelector((state) => state.from.value)
    const pathname = window.location.pathname
    const dispatch = useDispatch()
    const { _ } = useLoaderData()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if(from !== pathname){
            window.scrollTo(0, 0)
        }
        dispatch(setFrom(pathname))
    }, [dispatch, from, pathname])


    const params = new Proxy(new URLSearchParams(location.search), {
        get: (serachParams, prop) => serachParams.get(prop)
    })

    const tags = decodeURIComponent(params.tags).split(",")

    let filteredProjects;
    if(tags[0] == 'null'){
        filteredProjects = Projects
        tags.pop()
    }else{
        filteredProjects = Projects.filter((project) => {
            return tags.filter(tag => project.tags.includes(tag)).length !== 0
        })
    }

    const projects = filteredProjects.map((proj, index) => {
        return <ProjectCard title={proj.id} key={index}/>
    })

    const options = []
    ProjectTags.forEach((tag) => {
        const ptag = tag.replace(/\s/g,'-').toLowerCase()
        options[ptag] = tag
        const option = { label: tag, value: tag}
        options.push(option)
    })


    return (
        <div className="project_tag_page_container">
            <div className="project_tag_page_title">
                Projects
            </div>
            <div className="filter">
                <MultiSelect
                    value={tags}
                    placeholder="Select Tags"
                    className="tagSelect"
                    options={options}
                    display="chip"
                    filter={false}
                    onChange={(e) => {
                        if(e.value == ''){
                            navigate(location.pathname)
                            return
                        }
                        const newTags = encodeURIComponent(e.value.filter(tag => tag != '').join(','))
                        navigate(location.pathname + "?tags=" + newTags)
                    }}
                />
            </div>
            <hr className="projectTagHR"></hr>
            <div className="tagged_projects">
                {projects}
            </div>
        </div>
    )
}

export default ProjectTagPage