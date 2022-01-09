import React from "react";
import './style.css'
import IconClose from '../../objects/IconClose';
import Logo from '../../objects/Logo';
import About from '../../objects/About';

const HeaderInternal = () => (
    <header className="header-internal">
        <Logo light />
       <About className="light"/>
       <IconClose />
    </header>
);


export default HeaderInternal