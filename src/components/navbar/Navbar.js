
// Styles
import './Navbar.css'


function Navbar () {
    
    return(
        <nav className="Navbar" id="top">
            <div className="Navbar-container">
                <a href="#" className="highlight link" id="top-initial">C.S</a>
                <div className="Navbar-link-container">
                    <a href="#Projects" className="Navbar-link link">Projects</a>
                    <a href="#Skills" className="Navbar-link link">Skills</a>
                    <a href="#Contact" className="Navbar-link link">Contact</a>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;