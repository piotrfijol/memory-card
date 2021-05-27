import Card from './Card';
import {useEffect, useState} from 'react';

function Playboard({data, onClickCard}) {

    const [cards, setCards] = useState([]);

    function randomize(array) {
        let arrCpy = [...array];
        let result = [];

        while (arrCpy.length != 0) {
            let index = Math.floor(Math.random() * arrCpy.length);
            result.push(arrCpy[index]);
            arrCpy.splice(index, 1);
        }

        return result;
    }
    

    const handleCardClick = e => {
        console.log(e.target.querySelector('.card__content__text').textContent);
        onClickCard(e.target.querySelector('.card__content__text').textContent);
        setCards(randomize(data));
    }

    useEffect(() => {
        setCards(randomize(data));
    }, []);

    return (
        <div className="playboard">
            {cards.map(el => {
        return <Card onClickCard={handleCardClick} name={el.name} img={el.image} />
            })}
        </div>
    );
}

export default Playboard;