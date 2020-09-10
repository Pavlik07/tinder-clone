import React, {useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import database from './firebase';

function TinderCards() {
    const [people, setPeople] = useState([
        /*{
            name: 'Sharon Stone',
            url: 'images/Sharon.jpg'
        },
        {
            name: 'Hugh Jackman',
            url: 'images/hugh.png'
        }*/
    ]);

useEffect(() => {
    const unsubscribe = database
    .collection('people')
    .onSnapshot(snapshot => 
        setPeople(snapshot.docs.map(doc => doc.data()))
    );

    return () => {
        //cleanUp code, so the app wouldn't break...
        unsubscribe();
    };
}, []);

    return (
        <div>
            <div className="tinderCards__cardContainer">

            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
                >
                    <div className='card' 
                    style={{ backgroundImage: `url(${person.url})`}}>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}

            </div>
        </div>
    )
}

export default TinderCards;