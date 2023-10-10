import {ReactComponent as Envelope} from "./assets/svg/envelope.svg"
import {ReactComponent as Github} from "./assets/svg/github.svg"
import {ReactComponent as LinkedIn} from "./assets/svg/linkedin.svg"
import "./Header.css"
import ThemeSwitch from "./ThemeSwitch"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setFrom } from "./fromSlice"
import { setScrollTo } from "./scrollToSlice"

const Header = ({refs}) => {
	const pathname = window.location.pathname   
	const dispatch = useDispatch()

    return (
        <header id = "navbar">
			<div className="logo fade_in">
				<h4 onClick={() => {dispatch(setFrom(pathname)); dispatch(setScrollTo("Welcome"))}}>
					<Link to="/">richard yang</Link>
				</h4>
			</div>
			<div>
				<ul className="nav_links fade_in">
					<li onClick={() => {dispatch(setFrom(pathname)); dispatch(setScrollTo("Welcome"))}}>
						<Link to="/" className="nav_link">Home</Link>
					</li>
					<li>
						<Link to="/about" className="nav_link">About</Link>
					</li>
					<li>
						<Link to="/projects" className="nav_link">Projects</Link>
					</li>
				</ul>
			</div>
			<div>
				<ul className="nav_icons">
					<li className="icon">
						<a href="https://www.linkedin.com/in/richard-ry-yang" className="icon_link">
							<LinkedIn />
						</a>
					</li>
					<li className="icon">
						<a href="https://www.github.com/ryang1337" className="icon_link">
							<Github />
						</a>
					</li>
					<li className="icon">
						<a href="mailto:email@example.com" className="icon_link">
							<Envelope />
						</a>
					</li>
					<li className="icon">
						<ThemeSwitch />
					</li>
				</ul>
			</div>
		</header>
    )
}

export default Header;