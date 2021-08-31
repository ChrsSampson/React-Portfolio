import './Projects.css'
import Project from '../project/Project'


function Projects (props) {
    
    const ProProjects = props.data.ProProjects.map((project, i) => {
        
        const tags = project.tags.map((tag) => {
            return <span className="Project-tag">{tag}</span>
        })

        return (
            <Project key={i + 30} data={project} tags={tags}/>
        )
            
    });

    const Prototypes = props.data.ProtoProjects.map((prototype, i) => {

        const tags = prototype.tags.map((tag) => {
            return <span className="Project-tag">{tag}</span>
        })

        return (
            <Project key={i + 20} data={prototype} tags={tags}/>
        )
    });

    return (
        <article className="Projects" id="Projects">
            <h2 className="section-title">Projects</h2>
            <div className="Project-Container">
                {ProProjects} 
            </div>
            <h1 className="section-title">Workbench Prototypes</h1>
            <sub>(Partially working, incomplete, or experimental projects)</sub>
            <div className="Project-Container">
                {Prototypes}
            </div>
        </article>
    )
}

export default Projects