import './Projects.css'
import Project from '../project/Project'
import {LinkOut, GithubFill} from 'akar-icons'

function Projects (props) {
    
    const ProProjects = props.data.ProProjects.map((project) => {
        
        const tags = project.tags.map((tag) => {
            return <span className="Project-tag">{tag}</span>
        })

        return (
            <Project data={project} tags={tags}/>
        )
            
    });

    const Prototypes = props.data.ProtoProjects.map((prototype) => {

        const tags = prototype.tags.map((tag) => {
            return <span className="Project-tag">{tag}</span>
        })

        return (
            <Project data={prototype} tags={tags}/>
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