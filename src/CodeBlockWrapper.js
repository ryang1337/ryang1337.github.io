import "./CodeBlockWrapper.css"
import { CodeBlock } from "react-code-blocks"

const CodeBlockWrapper = ({text, language, showLineNumbers, theme}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="left">
                    <span className="dot d1"></span>
                    <span className="dot d2"></span>
                    <span className="dot d3"></span>
                </div>
            </div>

            <div className="codeBlock">
                <CodeBlock
                    text={text}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={theme}
                />
            </div>
        </div>
    )
}

export default CodeBlockWrapper;