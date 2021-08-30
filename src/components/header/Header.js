import './Header.css'
import About from '../about/About'
import Divider from '../divider/Divider'

function Header (props){


    return(
        <article className="Header">
            <About data={props.data}/>
            <Divider />
        </article>
    )

}

export default Header;