import React from "react";
import "./style.css"
import TagGame from "../../objects/TagGame";


const HistoryGame = () => (
    <ol className="history-game">
        <li className="action">
            <TagGame content="Added x" />
        </li>
        <li className="action">
            <TagGame content="Added x" />
        </li>
        <li className="action">
            <TagGame content="Added x" />
        </li>
        <li className="action">
            <TagGame content="Added x" />
        </li>
        <li className="action">
            <TagGame content="Added x" />
        </li>
        <li className="action">
            <TagGame content="Added x" />
        </li>
        <li className="action">
            <TagGame content="Added x" />
        </li>
        <li className="action">
            <TagGame content="Added x" />
        </li>
        <li className="action">
            <TagGame content="Added x" />
        </li>

        <li className="action">
            <TagGame className="-end" content="Tie!" />
        </li>
    </ol>
);

export default HistoryGame