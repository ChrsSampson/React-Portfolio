// import './Header.css'
import About from '../about/About'


function Header (props){


    return(
        <article className="Header">
            <About data={props.data}/>
        </article>
    )

}

export default Header;