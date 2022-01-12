import React from "react";
import './style.css'
import playerX from '../../img/playerx.png'
import playerO from '../../img/playero.png'

const handleClick = () => {
    console.log('vamo que vamo')
}

const PlayerGame = ({ player = false}) => {
   const players = [];
   players['x'] = playerX;
   players['o'] = playerO;

    return (
    <button onClick={handleClick} className="player-game">
         {player && <img src={players[player]} alt={`Player ${player.toUpperCase()}`} />}
    </button>
    )
};

export default PlayerGame