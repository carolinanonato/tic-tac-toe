import React, { useState } from 'react';
import './App.css';

import HashtagGame from './components/HashtagGame';
import HeaderGame from './components/HeaderGame'
import HeaderInternal from './components/HeaderInternal';

import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';
import UserProfile from './components/UserProfile';
import HistoryGame from './components/HistoryGame';
import WrapperHashtagHistory from './objects/WrapperHashtagHistory';


const App = () => { 
   const [activeAbout, setActiveAbout] = useState("")
  const [history, setHistory] = useState([])
  const [active, setActive] = useState(false)


  const handleClickAdd = () => setActiveAbout("active");
  const handleClickRemove = () => setActiveAbout("");

  const addHistory = (player) => {
    setHistory(old => [...old, `Added ${player.toUpperCase()}`])
  
  };

  const showHideHistory = () => {
   setActive(old => !!!old);
  }

  return (
    <main id="main" className='app'>
      <HeaderGame onClick={handleClickAdd}/>

      <WrapperHashtagHistory active={active}>
        <HashtagGame callback={addHistory}/>
        <InputCheckbox onClick={showHideHistory} id="show"  value="show" type="checkbox" content="Show events"/>
      
      <HistoryGame history ={history} />
     </WrapperHashtagHistory>

     <LayerDark className={activeAbout}>
      <HeaderInternal onClick={handleClickRemove}/>
      <UserProfile />
     </LayerDark>
    </main>
  )
};




export default App;
