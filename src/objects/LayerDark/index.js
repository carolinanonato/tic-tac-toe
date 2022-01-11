import React from "react";
import './style.css'

const LayerDark = ({children, className=''})=> (
     <article className={`layer-dark ${className}`}>{children}</article>
);

export default LayerDark