import React from 'react';
import './style.css'

const handleClick = () => {
console.log('aoooo')
}

const About = ({className=""}) => {
   return (
     <a href='#to-do' 
     className={`about ${className}`} 
     onClick={handleClick}
     >
    ABOUT
    </a>
   )
}

export default About;