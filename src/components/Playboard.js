import Card from './Card';

function Playboard() {

    return (
        <div className="playboard">
            <Card 
                img="https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png"
                name="Jake the dog"    
            />
            <Card 
                img="https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png"
                name="Finn"    
            />
            <Card 
                img="https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png"
                name="Finn"    
            />
            <Card name="Karta"/>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
        </div>
    );
}

export default Playboard;