import React from 'react';
import './style.css'



const About = ({className="", onClick}) => {
   return (
     <a href='#to-do' 
     className={`about ${className}`} 
     onClick={onClick}
     >
    ABOUT
    </a>
   )
}

export default About;