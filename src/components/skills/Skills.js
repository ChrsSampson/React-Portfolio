import './Skills.css'
import Skill from '../skill/Skill'

function Skills (props) {
        
     const skills = props.data.map((skill, i) => {
        return <Skill key={i} data={skill} />
        
    })

    return(
        <article className="Skills" id="Skills">
            <h2 className="section-title">Skills</h2>
            <div className="Skills-container">
                {skills}
            </div>
        </article>
    )
}

export default Skills