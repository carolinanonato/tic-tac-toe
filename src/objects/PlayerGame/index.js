import React from "react";
import './style.css'
import playerX from '../../img/playerx.png'
import playerO from '../../img/playero.png'

const PlayerGame = ({player}) => {
   const players = [];
   players['x'] = playerX;
   players['o'] = playerO;

    return <button className="player-game">
        <img src={players[player]} alt={`Player ${player.toUpperCase()}`} />
    </button>

};

export default PlayerGame