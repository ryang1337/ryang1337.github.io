import "./ThemeSwitch.css"
import {useEffect} from "react"
    
const ThemeSwitch = ({setLightMode}) => {
    useEffect(() => {
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        toggleSwitch.addEventListener('change', (e) => {
            var element = document.body;
            if (e.target.checked) {
                element.classList.add('dark-mode');
                setLightMode(false);
            }
            else {
                element.classList.remove('dark-mode');
                setLightMode(true);
            }    
        });
    }, [])

    return(
        <label htmlFor="theme" className="theme">
            <span className="theme-switch">
                <input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" value="dark"/>
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
