import React from 'react';
import './App.css';

import Hashtag from './components/Hashtag';
import Header from './components/Header'
import HeaderInternal from './components/HeaderInternal';

import Checkbox from './objects/Checkbox';
import Profile from './objects/Profile';
import UserProfile from './components/UserProfile';





const App = () => (
    <main className='app'>
      <Header />
      <Hashtag />
      <Checkbox  id="show"  value="show" type="checkbox" content="Show events"/>
     

     <Profile className="">
      <HeaderInternal />
      <UserProfile />
     </Profile>
    </main>
  );




export default App;
