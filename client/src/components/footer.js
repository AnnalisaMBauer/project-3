import React from 'react';
import "../App.css"
import { Link } from 'react-router-dom'

function Footer() {
    const Style = {
        fontFamily: 'Orbitron',
    }
    return(
        <div className="fixed-bottom" style={Style}>
        <footer className="blog-footer mt-5">
            <div className="foot-box bg-dark text-center text-white">
                <div className="pt-2"><Link to='/'>Back to Home</Link></div>
                <div className="copyRight p-3"><a href="https://github.com/AnnalisaMBauer/project-3" target="_blank">© 2021 Geek Games</a></div>
            </div>
      </footer>
      </div>
    )

}

export default Footer;