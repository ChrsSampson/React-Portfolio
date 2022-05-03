// import './About.css'
import {GithubFill, LinkedinBoxFill} from 'akar-icons'

function About (props) {

    return (
        <section className="About">
            <article className="About-container">
                <h2 className="About-header1">
                    Hi, I'm <span className="highlight">{props.data.name}</span>
                </h2>
                <h3 className="About-header2">
                    {props.data.title}
                </h3>
                <p>
                    {props.data.tagline}
                </p>
                <p className="About-text">
                    {props.data.bio}
                </p>
                <div className="About-footer">
                    <a href='/files/Resume.pdf' download className="button-link">Resume</a>
                    <a href="https://github.com/ChrsSampson" className="link"><GithubFill className="icon" size={35} /></a>
                    <a href="https://www.linkedin.com/in/chris-s-558341202/" className="link"><LinkedinBoxFill strokeWidth={2} size={35} /></a>
                </div>
            </article>
        </section>
    )
}

export default About;