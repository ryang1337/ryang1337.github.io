import "./ProjectCard.css"
import { atomOneDark, a11yLight} from "react-code-blocks"
import RayCloneCode from "./assets/code_blocks/ray_clone.js"
import CodeBlockWrapper from "./CodeBlockWrapper"

const ProjectCard = ({title, desc, completeDate, tags, lightMode}) => {
    const tagDisplay = tags.map((tag, i) => <li className="tagItem" key={i}>{tag}</li>);

    return (
            <div className="projectCardContainer">
                <a className="clickableCard" href="#">
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
                </a>
                <div className="projectThumbnail codeBlock">
                    <CodeBlockWrapper
                        text={RayCloneCode}
                        language="cpp"
                        showLineNumbers={true}
                        theme={lightMode ? a11yLight : atomOneDark}
                    />
                </div>
            </div>
    )
}

export default ProjectCard;