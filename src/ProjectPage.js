import './ProjectPage.css'
import { ProjectTitleMap } from './ProjectMap.js'
import { useLoaderData } from 'react-router-dom'
import CodeBlockWrapper from './CodeBlockWrapper'
import Tags from './Tags.js'
import { useSelector, useDispatch } from 'react-redux'
import { setFrom } from './fromSlice'
import { useEffect } from 'react'
import Markdown from 'react-markdown'

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
    const content = project.content
    const from = useSelector((state) => state.from.value)
    const pathname = window.location.pathname
    const dispatch = useDispatch()

    useEffect(() => {
        if(from !== pathname){
            window.scrollTo(0, 0)
        }
        dispatch(setFrom(pathname))
    }, [dispatch, from, pathname])

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
                <div className="project_page_thumbnail codeBlock">
                    <CodeBlockWrapper
                        text={codeBlockText}
                        language="cpp"
                        showLineNumbers={true}
                        darkMode={darkMode}
                    />
                </div>
                :
                <div className="project_page_thumbnail">
                    { image }
                </div>
            }
            <Markdown className="project_content">
                { content }
            </Markdown>
        </div>
    )
}

export default ProjectPage