import '../styles/Card.css';

function Card({img, name}) {

    const handleMouseMove = e => {
        const el = e.currentTarget.getBoundingClientRect();
        let x = (e.clientX - (el.left+el.width/2))/el.width*2;
        let y = (e.clientY - (el.top+el.height/2))/el.height*2;

        e.currentTarget.style.transform = `rotate3d(${-y}, ${x}, 0, 6deg)`;
    } 

    const handleMouseOut = e => {
        e.currentTarget.style.transform = '';
    }

    return (
        <div onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} className="card">
                <div className="card__content">
                    <img 
                        src={img} 
                        className="card__content__img" 
                        alt="Card thumbnail"
                    />
                    <p src="" className="card__content__text">
                        {name}
                    </p>
                </div>
            </div>
    );
}

export default Card;