
import React, {useEffect, useState} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import axios from './axios'

const TinderCards = () => {

    const [people, setPeople] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');
            setPeople(req.data)
        }
        fetchData();
    }, [])


    const swiped = (direction, nameToDetele) =>{
            console.log('removing: ' + nameToDetele)
        }

    const outOfFrame = (name) => {
            console.log(name + ' left the screen')
        }
  return (
    <div clasName='tinderCards'>
        
        <div className='CardContainer'>
        {  people.map((person) => {
            return <TinderCard
           className='swipe'
           key={person.name}
           preventSwipe={['up', 'down']}
           onSwipe={(dir) => swiped(dir, person.name)}
           onCardLeftScreen={() => outOfFrame(person.name)}
           >
            <div
                className='card'
                style={{backgroundImage: `url(${person.imgUrl})`}}
            >
                <h3>{person.name}</h3>
            </div>
            </TinderCard>
        })}
       </div>
        </div>
  )
}

export default TinderCards