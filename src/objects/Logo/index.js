import React from 'react';
import Cute from '../../img/cutelogo2.png';
import './style.css'
import LogoLight from '../../img/cutelogo2_white.png'

const Logo = ({light}) => (<img
src={light ? LogoLight : Cute} 
alt="Cute Logo" 
className='logo'/>);

export default Logo;