import './Contact.css'
import {ArrowUp} from 'akar-icons'
import {Link} from 'react-scroll'

function Contact () {
    return(
        <article className="Contact" id="Contact">
            <div className="Contact-container">
                <h2 className="section-title">Contact</h2>
                <a className="button-link Contact-button" href="mailto:csamposn@gmail.com">Email Me</a>
                <a className="Contact-link link" href="https://github.com/ChrsSampson">Created By Chris Sampson @StuckNode</a>
            </div>
            <Link className="Contact-totop link" to="top" smooth={true} duration={700}><ArrowUp size={50}/></Link>
        </article>
    )
}

export default Contact