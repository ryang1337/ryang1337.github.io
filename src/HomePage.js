import Welcome from './Welcome.js'
import Projects from './Projects.js'
import "./HomePage.css"
import { useOutletContext } from 'react-router-dom'

const HomePage = () => {
    const [refs] = useOutletContext()

    return (
        <div id="home" className='main'>
            <Welcome ref={refs[0]} />
            <Projects ref={refs[2]} />
        </div>
    )
}

export default HomePage;