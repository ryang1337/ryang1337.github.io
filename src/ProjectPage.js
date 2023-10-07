import './ProjectPage.css'
import { ProjectTitleMap } from './ProjectMap.js'
import { useLoaderData, useLocation } from 'react-router-dom'
import CodeBlockWrapper from './CodeBlockWrapper'
import Tags from './Tags.js'
import { useSelector } from 'react-redux'

export const loader = ({ params }) => {
    const project = ProjectTitleMap[params.projectTitle]
    return { project }
}

const ProjectPage = () => {
    const { project } = useLoaderData()
    const projectTitle = project.title
    const tags = project.tags
    const timeline = project.timeline
    const hasCodeBlock = project.hasCodeBlock
    const image = project.image
    const codeBlockText = project.codeBlockText
    const darkMode = useSelector((state) => state.darkMode.value)

    return (
        <div className="project_page_container">
            <div className="project_header">
                <div className="project_title">
                    { projectTitle }
                </div>
                <div className="project_tags">
                    <Tags tags={tags}/>
                </div>
                <div className="project_timeline">
                    { timeline }
                </div>
            </div>
            {
                hasCodeBlock ? 
                <div className="projectThumbnail codeBlock">
                    <CodeBlockWrapper
                        text={codeBlockText}
                        language="cpp"
                        showLineNumbers={true}
                        darkMode={darkMode}
                    />
                </div>
                :
                <div className="projectThumbnail">
                    {image}
                </div>
            }
            <div className="project_content">

            </div>
        </div>
    )
}

export default ProjectPage