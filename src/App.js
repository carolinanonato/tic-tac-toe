import React from 'react';
import Header from './components/Header'
import Board from './objects/Board';
import Player from './objects/Player';



function App() {
  return (
    <>
      <Header />
      <Board />
      <Player player='o'/>
    </>
  );
}



export default App;
