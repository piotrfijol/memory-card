import {useState} from 'react';
import Playboard from './components/Playboard';

function App() {

  const [name, setName] = useState("Cos");

  function handleClick(e) {
    const imie = prompt("Podaj swoje imie: ");
    setName(imie);
  } 

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
