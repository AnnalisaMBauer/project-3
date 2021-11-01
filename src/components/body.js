import React from 'react';
import games from './gamesList'
import GamesCard from './gamesCard'
import Heading from "./heading";

function Body()  {
    return (
        <div>
             <Heading />
        
        <div className="d-flex justify-content-center flex-wrap p-3 mb-5">
        
           {games.map((game) => 
           {return <GamesCard games={game} key={game.id} /> }) }
        </div> 
        </div>
  );
}

export default Body;