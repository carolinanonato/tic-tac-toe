import React from 'react';
import './App.css';
import Hashtag from './components/Hashtag';
import Header from './components/Header'
import Label from './objects/Label';
import Input from './objects/Input';



const App = () => (
    <main className='app'>
      <Header />
      <Hashtag />
      <Input  id="show"  value="show" content="Show events"/>
     
     
    </main>
  );




export default App;
