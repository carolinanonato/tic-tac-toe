import React from "react";
import './style.css'

const IconClose = ({onClick}) => (
    <a href="#" className="icon-close" onClick={onClick}>
        <span className="content" >Close</span>
    </a>
);

export default IconClose;