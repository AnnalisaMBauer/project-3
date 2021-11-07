import react from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from 'react-router-dom';

function AboutUs() {
  const Style = {
    padding: "1rem",
    width: "800px",
    fontFamily: 'Orbitron',
    color: "white",
    marginBottom: "5rem",

  };

  const Team = {
    textAlign: 'center',
    flexDirection: 'row',
    
  }

  return (
    <div className="d-flex justify-content-center">
      <Zoom>
          <div id="bg-image-contact" className="mt-1" style={Style}>
            <div className="col px-1">
              <h1 className="display-4 fst-italic">About us!</h1>
              <div className="container d-flex justify-content-center">
              <p className="lead m-1 mt-5">
                <h4><em>We are:</em></h4>
                <br>
                </br>
                Recent graduates of the U of A Full Stack Web Development Bootcamp.
                <br>
                </br>
                This was initially our final project for the course, however, we plan to continue development and addition of games.<br></br>
                You can find our individual GitHub Repos by following the links below:<br></br>
                <div className="d-flex column justify-content-center align-content-center m-5" style={Team} >
                <Link to="https://github.com/athaight" ><img src="./img/Andy.png"/><h4>Andy</h4></Link>
                <Link to="https://github.com/byoung01" ><img src="./img/Brevin.png"/><h3>Brevin</h3></Link>
                <Link to="https://github.com/AnnalisaMBauer" ><img src="./img/Anna.png"/><h3>Anna</h3></Link>
                </div>
              </p>
            </div>
          </div>

        </div>
      </Zoom>
    </div>
  );
}

export default AboutUs;