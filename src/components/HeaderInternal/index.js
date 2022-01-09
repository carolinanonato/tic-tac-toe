import React from "react";
import './style.css'
import IconClose from '../../objects/IconClose';
import Logo from '../../objects/Logo';
import About from '../../objects/About';

const HeaderInternal = ({onClick}) => (
    <header className="header-internal">
        <Logo light />
       <About className="light" 
       onClick={onClick}/>
       <IconClose onClick={onClick}/>
    </header>
);


export default HeaderInternal