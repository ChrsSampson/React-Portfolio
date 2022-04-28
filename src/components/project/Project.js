import './Project.css'
import { LinkOut, GithubFill } from 'akar-icons';

function Project (props) {


    return(
        <div className="Project-card">
                <div className="card">
                    <img className="Project-card-img" src={props.data.image} alt={props.title} />
                    <div className="card-body">
                        <h4 className="Project-card-title">{props.data.title}</h4>
                            {props.data.client ? <h5 className="Project-card-client">{props.data.client}</h5> : null}
                        <p className="Project-card-text">{props.data.desc}</p>
                        <div className="Project-card-links">
                            {props.data.link ? <a href={props.data.link} className="link"><LinkOut /></a> : null}
                            {props.data.gitlink ? <a href={props.data.gitlink} className="link"><GithubFill /></a> : null}
                        </div>
                        <div className="Project-tag-container">
                            {props.tags}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Project;