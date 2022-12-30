import {ReactComponent as Envelope} from "./svg/envelope.svg"
import {ReactComponent as Github} from "./svg/github.svg"
import {ReactComponent as LinkedIn} from "./svg/linkedin.svg"
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
		<div id = "footer_icons">
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
			</ul>
		</div>
		<div id = "footer_text">
			&copy; 2022 Richard Yang. | richard.ruoyu.yang@gmail.com
		</div>
	</footer>
    )
}

export default Footer;