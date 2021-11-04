import react from "react";
import Zoom from 'react-reveal/Zoom';

const Jumbotron = () => {
    const Style = {
        fontSize: '5rem',
        textAlign: 'center',
        padding: '1.5rem',
        boxShadow: '4px 4px 10px 1px black',
        borderRadius: '2rem',
        cursor: "pointer",
        gridArea: '1 / 1',
        zIndex: '999',
        background: 'linear-gradient(180deg, rgba(83,175,200,1) 50%, rgba(255,255,255,0.4983734227129337) 100%)',
        color: "white",
        height: '400px',
        margin: 'auto',
      };
    
return(
    <Zoom>
        <div class="jumbotron jumbotron-fluid p-3 rounded align-self-flex-start" style={Style}>
        <h1 class="display-4"><em>Tic Tac Toe</em></h1>
        <p class="lead">This is a simultaneous, zero-sum game, and it has only two possible outcomes:<br></br> 
        a draw, or a win for one player and a loss for the other.<br></br> 
        "rock crushes scissors" | "paper covers rock" | "scissors cuts paper".<br></br> 
        If the game is a draw, it is repeated until a winner is declared.</p>
        <p><em>Click to begin!</em></p>
        </div>
    </Zoom>
)
}

export default Jumbotron;