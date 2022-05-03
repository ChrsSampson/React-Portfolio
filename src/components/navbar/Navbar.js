import {Link} from 'react-scroll'
import {Sun, Moon} from 'akar-icons'
// Styles
// import './Navbar.css'


function Navbar (props) {

    return(
        <nav className="Navbar" id="top">
            <div className="Navbar-container">
                <a href="https://www.hackreactor.com/" className="highlight link" id="top-initial">
                    <img className="Navbar-img" src="HR.svg" alt="Hack Reactor logo" />
                </a>
                <div className="Navbar-link-container">
                    <Link to="Projects" smooth={true} duration={700} className="Navbar-link link">Projects</Link>
                    <Link to="Skills" smooth={true} duration={700} className="Navbar-link link">Skills</Link>
                    <Link to="Contact" smooth={true} duration={700} className="Navbar-link link">Contact</Link>
                    <span className="Navbar-link highlight link" onClick={() => props.handleClick()}>
                        { props.theme === 'dark' ?
                            <Sun size={24} />
                            :
                            <Moon size={24} />
                        }
                    </span>
                </div>

            </div>
        </nav>
    )
}


export default Navbar;