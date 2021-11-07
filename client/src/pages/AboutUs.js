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
    marginTop: '1rem',
  }

  const GitRepoLink = {
    height: '10%',
    paddingRight: '2rem',
  }
   const GitRepoTeam = {
     height: '25%',
   }

  const GitRepoBox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }

  return (
    <div className="d-flex justify-content-center">
      <Zoom>
          <div id="bg-image-contact" className="mt-1" style={Style}>
            <div className="col px-1">
              <h1 className="display-4 fst-italic">About us!</h1>
              <div className="container d-flex justify-content-center">
              <div className="lead m-1 mt-5">
                <h4><em>We are:</em></h4>
                <br>
                </br>
                Recent graduates of the U of A Full Stack Web Development Bootcamp.
                <br>
                </br>
                This was initially our final project for the course, however, we plan to continue development and addition of games.<br></br>
                You can find our individual GitHub Repos by following the links below:<br></br>
                <div className="d-flex justify-content-center align-content-center mt-5" style={Team} >
                <a href="https://github.com/athaight" target="_blank"><img src="./img/Andy.png" style={GitRepoTeam}/><h4>Andy</h4></a>
                <a href="https://github.com/byoung01" target="_blank"><img src="./img/Brevin.png" style={GitRepoTeam}/><h3>Brevin</h3></a>
                <a href="https://github.com/AnnalisaMBauer" target="_blank" ><img src="./img/Anna.png" style={GitRepoTeam}/><h3>Anna</h3></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Zoom>
    </div>
  );
}

export default AboutUs;