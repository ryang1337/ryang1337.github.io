import "./ProjectCard.css"
import CodeBlockWrapper from "./CodeBlockWrapper"
import Tags from "./Tags.js"
import { Link } from "react-router-dom"
import {ReactComponent as Arrow} from "./assets/svg/up-right-arrow.svg"
import { ProjectTitleMap } from "./ProjectMap.js"

const ProjectCard = ({ title, showThumbnail }) => {
    const queryTitle = title.replace(/\s/g,'-').toLowerCase()
    const project = ProjectTitleMap[title]
    const projectTitle = project.title
    const desc = project.desc
    const tags = project.tags
    const hasCodeBlock = project.hasCodeBlock
    const image = project.image
    const codeBlockText = project.codeBlockText

    return (
            <div className="projectCardContainer">
                <Link className="clickableCard" to={`/projects/${queryTitle}`}>
                    <div className="projectCard">
                        <div className="projectCardTitle">
                            <div className="cardMain">
                                <div className="cardTitle">
                                    {projectTitle}
                                </div>
                                <div className="outLink">
                                    <Arrow />
                                </div>
                            </div>
                            <div className="tags">
                                <Tags tags={tags}/>
                            </div>
                        </div>
                        <div className="projectCardDescription">
                            {desc}
                        </div>
                    </div>
                </Link>
                {
                    showThumbnail ? 
                        (hasCodeBlock ? 
                        <div className="projectThumbnail codeBlock">
                            <CodeBlockWrapper
                                text={codeBlockText}
                                language="cpp"
                                showLineNumbers={true}
                            />
                        </div>
                        :
                        <div className="projectThumbnail">
                            {image}
                        </div>)
                    :<></>
                }
            </div>
    )
}

export default ProjectCard;