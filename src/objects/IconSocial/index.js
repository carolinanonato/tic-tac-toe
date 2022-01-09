import React from "react";
import './style.css'

const IconSocial = ({action, src, alt}) => (
   <a target="_blank" href={action}>
    <img className="icon-social" src={src} alt={alt} />
    </a>
);

export default IconSocial