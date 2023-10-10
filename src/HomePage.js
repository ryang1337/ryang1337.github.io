import Welcome from './Welcome.js'
import FeaturedProjects from './FeaturedProjects.js'
import "./HomePage.css"
import { useOutletContext } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { resetFrom } from './fromSlice.js'
import { useEffect } from 'react'

const HomePage = () => {
    const {refs} = useOutletContext()
    const from = useSelector((state) => state.from.value)
    const dispatch = useDispatch()

    useEffect(() => {
        if(from !== "/"){
            window.scrollTo(0, 0)
            dispatch(resetFrom())	
        }
    }, [dispatch, from])

    return (
        <div id="home" className='main'>
            <Welcome ref={refs[0]} />
            <FeaturedProjects />
        </div>
    )
}

export default HomePage;