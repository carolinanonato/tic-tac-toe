import React from 'react';
import './App.css';
import Hashtag from './components/Hashtag';
import Header from './components/Header'
import About from './objects/About';
import Checkbox from './objects/Checkbox';
import IconClose from './objects/IconClose';
import Profile from './objects/Profile';




const App = () => (
    <main className='app'>
      <Header />
      <Hashtag />
      <Checkbox  id="show"  value="show" type="checkbox" content="Show events"/>
     

     <Profile>
       <About className="light"/>
       <IconClose />
     </Profile>
    </main>
  );




export default App;
