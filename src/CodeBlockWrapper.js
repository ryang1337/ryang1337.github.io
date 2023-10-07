import "./CodeBlockWrapper.css"
import { CodeBlock } from "react-code-blocks"
import { atomOneDark, a11yLight} from "react-code-blocks"
import { useSelector } from "react-redux"

const CodeBlockWrapper = ({ text, language, showLineNumbers }) => {
    const darkMode = useSelector((state) => state.darkMode.value)

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
                    theme={darkMode ? atomOneDark : a11yLight}
                />
            </div>
        </div>
    )
}

export default CodeBlockWrapper;