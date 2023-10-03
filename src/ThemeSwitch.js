import "./ThemeSwitch.css"
import {useEffect} from "react"

function switchTheme(e) {
    var element = document.body;
    console.log("hello");
    if (e.target.checked) {
        element.classList.add('dark-mode');
    }
    else {
        element.classList.remove('dark-mode');
    }    
}
    
const ThemeSwitch = () => {
    useEffect(() => {
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        toggleSwitch.addEventListener('change', switchTheme, false);
    }, [])

    return(
        <label for="theme" class="theme">
            <span class="theme-switch">
                <input id="theme" class="theme__toggle" type="checkbox" role="switch" name="theme" value="dark"/>
                <span class="theme__fill"></span>
                <span class="theme__icon">
                    <span class="theme__icon-part"></span>
                    <span class="theme__icon-part"></span>
                    <span class="theme__icon-part"></span>
                    <span class="theme__icon-part"></span>
                    <span class="theme__icon-part"></span>
                    <span class="theme__icon-part"></span>
                    <span class="theme__icon-part"></span>
                    <span class="theme__icon-part"></span>
                    <span class="theme__icon-part"></span>
                </span>
            </span>
        </label>
    )
}

export default ThemeSwitch;
