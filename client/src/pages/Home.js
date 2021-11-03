import React from "react";
import games from "../components/gamesList";
import GamesCard from "../components/gamesCard";
import Heading from "../components/heading";

function Body() {
  return (
    <div>
      <Heading />
      <div className="row">
        {games.map((game) => {
          
          return <GamesCard games={game} key={game.id} />;
        })}
      </div>
    </div>
  );
}

export default Body;
