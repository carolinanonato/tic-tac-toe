import React, { useState } from 'react';
import './App.css';

import HashtagGame from './components/HashtagGame';
import HeaderGame from './components/HeaderGame'
import HeaderInternal from './components/HeaderInternal';

import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';
import UserProfile from './components/UserProfile';
import HistoryGame from './components/HistoryGame';


const App = () => { 
   const [activeAbout, setActiveAbout] = useState("")
  const [history, setHistory] = useState([])


  const handleClickAdd = () => setActiveAbout("active");
  const handleClickRemove = () => setActiveAbout("");

  const addHistory = (player) => {
    setHistory(old => [...old, `Added ${player.toUpperCase()}`])
  
  };

  return (
    <main id="main" className='app'>
      <HeaderGame onClick={handleClickAdd}/>
      <HashtagGame callback={addHistory}/>
      <InputCheckbox  id="show"  value="show" type="checkbox" content="Show events"/>
     
     <HistoryGame history ={history} />

     <LayerDark className={activeAbout}>
      <HeaderInternal onClick={handleClickRemove}/>
      <UserProfile />
     </LayerDark>
    </main>
  )
};




export default App;
