import react from "react";
import Zoom from 'react-reveal/Zoom';

const Jumbotron = () => {
    const Style = {
        fontSize: '5rem',
        padding: '1.5rem',
        boxShadow: '4px 4px 10px 1px black',
        borderRadius: '1rem',
        cursor: "pointer",
        zIndex: '999',
      };
    
return(
    <Zoom>
        <div class="jumbotron jumbotron-fluid p-3 rounded align-self-flex-start" style={Style}>
        <h1 class="display-4"><em>Rock Paper Scissors</em></h1>
        <p class="lead">This is a simultaneous, zero-sum game, and it has only two possible outcomes:<br></br> 
        a draw, or a win for one player and a loss for the other.<br></br> 
        "rock crushes scissors" | "paper covers rock" | "scissors cuts paper".<br></br> 
        If the game is a draw, it is repeated until a winner is declared.</p>
        </div>
    </Zoom>
)
}

export default Jumbotron;