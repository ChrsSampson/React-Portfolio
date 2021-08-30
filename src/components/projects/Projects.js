import './Projects.css'
import {LinkOut, GithubFill} from 'akar-icons'

function Projects (props) {
    
    const ProProjects = props.data.ProProjects.map((project) => {
        
        const tags = project.tags.map((tag) => {
            return <span className="Project-tag">{tag}</span>
        })

        return (
            <div className="Project-card">
                <div className="card">
                    <img className="Project-card-img" src={project.image} alt={project.title} />
                    <div className="card-body">
                        <h5 className="Project-card-title">{project.title}</h5>
                        <p className="Project-card-text">{project.desc}</p>
                        <div className="Project-card-links">
                            <a href={project.link} className="link"><LinkOut /></a>
                            <a href={project.gitlink} className="link"><GithubFill /></a>
                        </div>
                        <div className="Project-tag-container">
                            {tags}
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    const Prototypes = props.data.ProtoProjects.map((prototype) => {

        const tags = prototype.tags.map((tag) => {
            return <span className="Project-tag">{tag}</span>
        })

        return (
            <div className="Project-card">
                <div className="card">
                    <img className="card-img-top" src={prototype.image} alt={prototype.title} />
                    <div className="card-body">
                        <h5 className="card-title">{prototype.title}</h5>
                        <p className="card-text">{prototype.desc}</p>
                        <div className="Project-card-links">
                            <a href={prototype.link} className="link"><LinkOut /></a>
                            <a href={prototype.gitlink} className="link"><GithubFill /></a>
                        </div>
                        <div className="Project-tag-container">
                            {tags}
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <article className="Projects" id="Projects">
            <h2 className="section-title">Projects</h2>
            <div className="Project-Container">
                {ProProjects} 
            </div>
            <h2 className="section-title">Prototypes</h2>
            <div className="Project-Container">
                {Prototypes}
            </div>
        </article>
    )
}

export default Projects