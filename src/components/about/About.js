import './About.css'
import {GithubFill, LinkedInV1Fill} from 'akar-icons'

function About (props) {

    return (
        <section className="About">
            <article className="About-container">
                <h2 className="About-header1">
                    Hi, I'm <span className="highlight">{props.data[0].name}</span>
                </h2>
                <h3 className="About-header2">
                    {props.data[0].title}
                </h3>
                <p>
                    {props.data[0].tagline}
                </p>
                <p className="About-text">
                    {props.data[0].bio}
                </p>
                <div className="About-footer">
                    <a href={props.data[0].resume} download="filename" className="button-link">resume</a>
                    <a href="https://github.com/ChrsSampson" className="link"><GithubFill className="icon" size={35} /></a>
                    <a href="https://www.linkedin.com/in/chris-s-558341202/" className="link"><LinkedInV1Fill className="icon"  size={35} /></a>
                </div>
            </article>
        </section>
    )   
}

export default About;