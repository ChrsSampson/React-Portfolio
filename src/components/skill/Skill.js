import './Skill.css'

function Skill (props) {
    return (
        <div className="Skill">
            <span className="Skill-text">{props.data}</span>
        </div>
    )
}

export default Skill