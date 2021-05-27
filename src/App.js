import {useState} from 'react';
import Playboard from './components/Playboard';

function App() {
  
  return (
  <div className="container">
    <header className="header">
      <h1 className="header__title">Memory-card</h1>
    </header>
    <Playboard />
  </div>
  );
}

export default App;
