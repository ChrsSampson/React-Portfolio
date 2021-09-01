import {Link} from 'react-scroll'

// Styles
import './Navbar.css'


function Navbar () {
    
    return(
        <nav className="Navbar" id="top">
            <div className="Navbar-container">
                <Link to="top" smooth={true} className="highlight link" id="top-initial">C.S</Link>
                <div className="Navbar-link-container">
                    <Link to="Projects" smooth={true} duration={700} className="Navbar-link link">Projects</Link>
                    <Link to="Skills" smooth={true} duration={700} className="Navbar-link link">Skills</Link>
                    <Link to="Contact" smooth={true} duration={700} className="Navbar-link link">Contact</Link>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;