import React from "react";
import Logo from '../../objects/Logo'
import About from '../../objects/About'
import Menu from '../../objects/Menu'
import './style.css'

const Header = ({onClick}) => (
    <header className="header">
        <Logo />
        <About onClick={onClick}/>
        <Menu onClick={onClick}/>

    </header>
)

export default Header