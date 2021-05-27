import {useState} from 'react';
import Playboard from './components/Playboard';
import Navbar from './components/Navbar';
import './styles/Header.css';

function App() {

  return (
  <div className="container">
    <header className="header">
      <h1 className="header__title">Memory Card</h1>
    </header>
    <Playboard />
    <Navbar />
  </div>
  );
}

export default App;
