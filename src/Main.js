import Welcome from './Welcome.js'
import Projects from './Projects.js'
import "./Main.css"

const Main = ({refs, lightMode}) => {
    return (
        <div className='main'>
            <Welcome ref={refs[0]}/>
            <Projects ref={refs[2]} lightMode={lightMode}/>
        </div>
    )
}

export default Main;