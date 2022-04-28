import './Skill.css'

function Skill (props) {
    return (
        <div className="Skill">
            <img className="Skill-icon" src={props.data.icon} alt={`${props.data.name} icon`} />
            <span className="Skill-text">{props.data.name}</span>
        </div>
    )
}

export default Skill