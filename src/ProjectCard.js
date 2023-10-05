import "./ProjectCard.css"
import { atomOneDark, a11yLight} from "react-code-blocks"
import RayCloneCode from "./assets/code_blocks/ray_clone.js"
import CodeBlockWrapper from "./CodeBlockWrapper"
import { Link } from "react-router-dom"

const ProjectCard = ({title, desc, completeDate, tags, lightMode, isCodeBlock, image}) => {
    const tagDisplay = tags.map((tag, i) => <li className="tagItem" key={i}>{tag}</li>);
    const queryTitle = title.replace(/\s/g,'-').toLowerCase()

    return (
            <div className="projectCardContainer">
                <Link className="clickableCard" to={`projects/${queryTitle}`}>
                    <div className="projectCard">
                        <div className="projectCardTitle">
                            <div className="cardMain">
                                <div className="cardTitle">
                                    {title}
                                </div>
                                <div className="cardDate">
                                    {completeDate}
                                </div>
                            </div>
                            <ul className="tags">
                                {tagDisplay}
                            </ul>
                        </div>
                        <div className="projectCardDescription">
                            {desc}
                        </div>
                    </div>
                </Link>
                {
                    isCodeBlock ? 
                    <div className="projectThumbnail codeBlock">
                        <CodeBlockWrapper
                            text={RayCloneCode}
                            language="cpp"
                            showLineNumbers={true}
                            theme={lightMode ? a11yLight : atomOneDark}
                        />
                    </div>
                    :
                    <div className="projectThumbnail">
                        {image}
                    </div>
                }

            </div>
    )
}

export default ProjectCard;