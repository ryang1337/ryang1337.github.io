import RayCloneCode from "./assets/code_blocks/ray_clone.js"
import { content as ray_clone_content } from "./assets/project_content/ray_clone.js"

const Projects = [
    {
        "id": "ray-clone",
        "title": "Ray Clone",
        "desc": "A distributed runtime for parallelizing C++ jobs based on Anyscale's Ray Core open source library.",
        "tags": ["C++", "Distributed Computing"],
        "timeline": "July 2023 - Oct 2023",
        "hasCodeBlock": true,
        "img": "",
        "codeBlockText": RayCloneCode,
        "content": ray_clone_content,
    },
    {
        "id": "drive-clone",
        "title": "Drive Clone",
        "desc": "A cloud file storage system with integrated file conversions and smart search.",
        "tags": ["React"],
        "timeline": "Nov 2023 - Present",
        "hasCodeBlock": false,
        "img": "",
        "content": "Currently in the process of building out the system. End product will have support for in-app file conversions and smart search using RAG."
    }
]

const ProjectTagMap = {}
const ProjectTitleMap = {}
const ProjectTags = []

Projects.forEach((project) => {
    project["tags"].forEach((tag) => {
        const ptag = tag.replace(/\s/g,'-').toLowerCase()
        if(ptag in ProjectTagMap){
            ProjectTagMap[ptag].push(project)
        }else{
            ProjectTagMap[ptag] = [project]
            ProjectTags.push(tag)
        }
    })

    ProjectTitleMap[project.title.replace(/\s/g,'-').toLowerCase()] = project;
})

export { ProjectTagMap }
export { ProjectTitleMap }
export { Projects }
export { ProjectTags }