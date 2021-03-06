import React from "react";
import Logo from '../../objects/Logo'
import About from '../../objects/About'
import MenuGame from '../../objects/MenuGame'
import './style.css'

const HeaderGame = ({onClick}) => (
    <header className="header-game">
        <Logo />
        <About onClick={onClick}/>
        <MenuGame onClick={onClick}/>

    </header>
)

export default HeaderGame