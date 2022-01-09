import React from 'react';
import './style.css'

const handleClick = () => {
    console.log('aoooo')
    }

const Menu = () => (<a href="#menu" 
className='burger'
onClick={handleClick}

><span className='center'>Menu</span></a>);

export default Menu;