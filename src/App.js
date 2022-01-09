import React, { useState } from 'react';
import './App.css';

import Hashtag from './components/Hashtag';
import Header from './components/Header'
import HeaderInternal from './components/HeaderInternal';

import Checkbox from './objects/Checkbox';
import Profile from './objects/Profile';
import UserProfile from './components/UserProfile';


const App = () => { 
   const [activeAbout, setActiveAbout] = useState("")

  
const handleClick = () => {
  setActiveAbout("active")
}

  return (
    <main className='app'>
      <Header onClick={handleClick}/>
      <Hashtag />
      <Checkbox  id="show"  value="show" type="checkbox" content="Show events"/>
     

     <Profile className={activeAbout}>
      <HeaderInternal />
      <UserProfile />
     </Profile>
    </main>
  )
};




export default App;
