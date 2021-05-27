import {useState} from 'react';
import Playboard from './components/Playboard';
import Navbar from './components/Navbar';
import data from './data.json';
import './styles/Header.css';

function App() {

  const [score, setScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const cardData = data.slice(0,12);

  const addSelectedCard = (cardName) => {
    if(!selectedCards.includes(cardName)) {
      setSelectedCards([...selectedCards, cardName]);
      if(score+1 > bestScore)
        setBestScore(score+1);
      setScore(score+1);
    }
    else {
      setScore(0);
      setSelectedCards([]);
    }
  }

  return (
  <div className="container">
    <header className="header">
      <h1 className="header__title">Memory Card</h1>
    </header>
    <Playboard data={cardData} onClickCard={addSelectedCard}/>
    <Navbar score={score} bestScore={bestScore}/>
  </div>
  );
}

export default App;
