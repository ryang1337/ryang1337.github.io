import './AboutPage.css'
import Markdown from 'react-markdown'
import portfolio_pic from './assets/portfoliopic.PNG'
import { title, subtitle, p } from './assets/aboutme'

const AboutPage = () => {
    return(
        <div className="about_page">
            <div className="about_page_container">
                <div className="about_page_text">
                    <Markdown className="about_page_title">
                        {title}
                    </Markdown>
                    <Markdown className="about_page_subtitle">
                        {subtitle}
                    </Markdown>
                    <Markdown className="about_page_p">
                        {p}
                    </Markdown>
                </div>
                <div className="about_page_image">
                    <img className="portfolio_image" src={portfolio_pic} alt="Picture of me"></img>
                </div>
            </div>
        </div>
    )
}

export default AboutPage