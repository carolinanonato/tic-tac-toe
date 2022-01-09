import React from 'react';
import './style.css'


const Menu = ({onClick}) => (<a href="#menu" 
className='burger' onClick={onClick}><span className='center'>Menu</span></a>);

export default Menu;