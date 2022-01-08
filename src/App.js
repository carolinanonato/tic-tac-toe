import React from 'react';
import './App.css';
import Hashtag from './components/Hashtag';
import Header from './components/Header'
import Checkbox from './objects/Checkbox';




const App = () => (
    <main className='app'>
      <Header />
      <Hashtag />
      <Checkbox  id="show"  value="show" type="checkbox" content="Show events"/>
     
     
    </main>
  );




export default App;
