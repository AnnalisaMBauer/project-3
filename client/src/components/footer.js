import React from 'react';
import "../App.css"

function Footer() {
    const Style = {
        fontFamily: 'Orbitron',
    }
    return(
        <div className="fixed-bottom" style={Style}>
        <footer className="blog-footer mt-5">
            <div className="foot-box bg-dark text-center text-white">
                <div className="toTop"><a href="top">Back to top</a></div>
                <div className="copyRight">© 2021 Geek Games</div>
            </div>
      </footer>
      </div>
    )

}

export default Footer;