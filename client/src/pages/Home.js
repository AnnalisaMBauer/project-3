import React from "react";
import games from "../components/gamesList";
import GamesCard from "../components/gamesCard";
import Heading from "../components/heading";

function Body() {
  return (
    <>
      <div>
        <Heading />
      </div>
      <div>
        <div className="d-flex justify-content-center flex-wrap p-3 mb-5">
          {games.map((game) => {
            return <GamesCard games={game} key={game.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Body;
