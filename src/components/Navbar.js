import '../styles/Navbar.css';

function Navbar({score, bestScore}) {

    return (
        <div className="navbar">
            <div className="scoreboard">
                <div className="scoreboard__score">
                    <i className="far fa-star"></i>
                    <p>{score}</p>
                </div>
                <div className="scoreboard__bestscore">
                    <i className="fas fa-trophy"></i>
                    <p>{bestScore}</p>
                </div>
            </div>
        </div>
    );
    
}

export default Navbar;