import React from "react";
import './style.css'
import playerX from '../../img/playerx.png'
import playerO from '../../img/playero.png'



const PlayerGame = ({ content = ''}) => {
    const players = [];
   players[''] = ''
   players['x'] = playerX;
   players['o'] = playerO;

    return (
    <button className="player-game">
         {players[content] && <img src={players[content]} 
         alt={`Player ${content}`} />}
    </button>
    )
};

export default PlayerGame