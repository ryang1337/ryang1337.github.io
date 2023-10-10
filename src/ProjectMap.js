import RayCloneCode from "./assets/code_blocks/ray_clone.js"

const Projects = [
    {
        "id": "ray-clone",
        "title": "Ray Clone",
        "desc": "A distributed runtime for parallelizing C++ jobs based on Anyscale's Ray Core open source library.",
        "tags": ["C++", "Distributed Computing"],
        "timeline": "July 2023 - Present",
        "hasCodeBlock": true,
        "img": "",
        "codeBlockText": RayCloneCode,
        "content": "content",
    },
    {
        "id": "bao",
        "title": "Bao",
        "desc": "A javascript package manager developed in C++",
        "tags": ["C++"],
        "timeline": "Oct 2023 - Present",
        "hasCodeBlock": true,
        "img": "",
    }
]

const ProjectTagMap = {}
const ProjectTitleMap = {}

Projects.forEach((project) => {
    project["tags"].forEach((tag) => {
        tag = tag.replace(/\s/g,'-').toLowerCase()
        if(tag in ProjectTagMap){
            ProjectTagMap[tag].push(project)
        }else{
            ProjectTagMap[tag] = [project]
        }
    })

    ProjectTitleMap[project.title.replace(/\s/g,'-').toLowerCase()] = project;
})

export { ProjectTagMap }
export { ProjectTitleMap }
export { Projects }