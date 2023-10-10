import "./ThemeSwitch.css"
import {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setDarkMode, setLightMode } from './darkModeSlice.js'
    
const ThemeSwitch = () => {
    const dispatch = useDispatch()
    const darkMode = useSelector((state) => state.darkMode.value)

    useEffect(() => {
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        toggleSwitch.addEventListener('change', (e) => {
            var element = document.body;
            if (e.target.checked) {
                element.classList.add('dark-mode');
                localStorage.setItem('theme', true)
                dispatch(setDarkMode())
            }
            else {
                element.classList.remove('dark-mode');
                localStorage.setItem('theme', false)
                dispatch(setLightMode())
            }    
        });
    },[dispatch])

    return(
        <label htmlFor="theme" className="theme">
            <span className="theme-switch">
                <input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" defaultChecked={darkMode}/>
                <span className="theme__icon">
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                </span>
            </span>
        </label>
    )
}

export default ThemeSwitch;
