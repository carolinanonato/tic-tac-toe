import React from "react";
import './style.css'
import Board from "../../objects/Board";
import Player from "../../objects/Player";



const Hashtag = () => (
<Board >
      <ul className="hashtag">
      <li className="item"><Player player='x' /> </li>
      <li className="item"><Player player='o' /> </li>
      <li className="item"><Player player='x' /> </li>

      <li className="item"><Player player='x' /> </li>
      <li className="item"><Player player='o' /> </li>
      <li className="item"><Player player='o' /> </li>
      
      <li className="item"><Player player='o' /> </li>
      <li className="item"><Player player='x' /> </li>
      <li className="item"><Player player='x' /> </li>
      </ul>
     </Board>

);

export default Hashtag;