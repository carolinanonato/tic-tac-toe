import React, {useState} from "react";
import './style.css'
import playerX from '../../img/playerx.png'
import playerO from '../../img/playero.png'



const PlayerGame = ({ player = false}) => {
    const [statePlayer, setStatePlayer] = useState(player)
   const players = [];
   players['x'] = playerX;
   players['o'] = playerO;

   const handleClick = () => setStatePlayer("o")


    return (
    <button onClick={handleClick} className="player-game">
         {statePlayer && <img src={players[statePlayer]} alt={`Player ${statePlayer.toUpperCase()}`} />}
    </button>
    )
};

export default PlayerGame