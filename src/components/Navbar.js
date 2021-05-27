import '../styles/Navbar.css';

function Navbar(props) {

    return (
        <div className="navbar">
            <div className="scoreboard">
                <div className="scoreboard__score">
                    <i class="far fa-star"></i>
                    <p>5</p>
                </div>
                <div className="scoreboard__bestscore">
                    <i class="fas fa-trophy"></i>
                    <p>10</p>
                </div>
            </div>
        </div>
    );
    
}

export default Navbar;