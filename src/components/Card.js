import '../styles/Card.css';

function Card({img, name}) {

    const handleMouseMove = e => {
        
        e.currentTarget.style.transform = `rotate(2deg)`;
    } 

    const handleMouseOut = e => {
        e.currentTarget.style.transform = `rotate(0deg)`;
    }

    return (
        <div onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} className="card">
                <div className="card__content">
                    <img 
                        src={img} 
                        className="card__content__img" 
                        alt="Card image"
                    />
                    <p src="" className="card__content__text">
                        {name}
                    </p>
                </div>
            </div>
    );
}

export default Card;