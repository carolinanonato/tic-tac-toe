import React from "react";
import './style.css'

const IconSocial = ({action, src, alt}) => (
   <a href={action} target="_blank" rel="noopener noreferrer">
    <img className="icon-social" src={src} alt={alt} />
    </a>
);

export default IconSocial