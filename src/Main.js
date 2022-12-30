import Welcome from './Welcome.js'
import Projects from './Projects.js'
import "./Main.css"

const Main = ({refs}) => {
    return (
        <div className='main'>
            <Welcome ref={refs[0]}/>
            <Projects ref={refs[2]}/>
        </div>
    )
}

export default Main;