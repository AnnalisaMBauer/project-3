import React from 'react';
import '../App.css';

function GamesCard(game) {
        
    return (
        <div className="gamesColumns col-4">
        <div className=" mt-3 mb-3 ">
            <h5 className="card-title p-2 bg-dark text-light">{game.games.title}</h5>
            <div className="card mt-1">
                <div className="gamesCards card-body card">
                        <img className="projImg m-2" src={game.games.img} alt="Project images"/>
                        <p className="m-2 p-3"> {game.games.tech} </p> 
                        <p className="m-2 p-3"> {game.games.description} </p> 
                </div>
            </div>
            <div className="card-action ml-5">
                <a href={game.games.play} target="_blank" rel="noreferrer" className="p-3">Play Now!</a>
            </div>
        </div>
        </div>
    )
}

export default GamesCard;