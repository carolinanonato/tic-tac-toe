import React from 'react';
import './style.css'

const Board = ({children}) => {
   return (
     <article className='board'>
       
       {children}
       
     </article>
   )
}

export default Board;