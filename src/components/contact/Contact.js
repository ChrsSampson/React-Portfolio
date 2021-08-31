import './Contact.css'
import {ArrowUp} from 'akar-icons'

function Contact () {
    return(
        <article className="Contact" id="Contact">
            <div className="Contact-container">
                <h2 className="section-title">Contact</h2>
                <a className="button-link Contact-button" href="mailto:csamposn@gmail.com">Email Me</a>
                <a className="link" href="https://github.com/ChrsSampson">Created By Chris Sampson @StuckNode</a>
            </div>
            <a className="Contact-totop link" href="#top"><ArrowUp size={50}/></a>
        </article>
    )
}

export default Contact