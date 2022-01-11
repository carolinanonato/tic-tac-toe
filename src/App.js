import React, { useState } from 'react';
import './App.css';

import Hashtag from './components/Hashtag';
import Header from './components/Header'
import HeaderInternal from './components/HeaderInternal';

import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';
import UserProfile from './components/UserProfile';


const App = () => { 
   const [activeAbout, setActiveAbout] = useState("")


  const handleClick = () => setActiveAbout("active");
  const handleClickRemove = () => setActiveAbout("");


  return (
    <main className='app'>
      <Header onClick={handleClick}/>
      <Hashtag />
      <InputCheckbox  id="show"  value="show" type="checkbox" content="Show events"/>
     

     <LayerDark className={activeAbout}>
      <HeaderInternal onClick={handleClickRemove}/>
      <UserProfile />
     </LayerDark>
    </main>
  )
};




export default App;
