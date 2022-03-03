import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './DatingCards.scss';

function DatingCards() {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url: 'https://mir-s3-cdn-cf.behance.net/projects/404/17bdfe136596969.Y3JvcCwxMzgwLDEwODAsMjI1LDA.png',
    },
    {
      name: 'jeff Bezos',
      url: 'https://mir-s3-cdn-cf.behance.net/projects/404/5785c3137586969.Y3JvcCwxNTAwLDExNzMsMCww.jpg',
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log('removing' + nameToDelete);
    // setLastDirection(direction)
  };

  const outOfFrame = (name) => {
    console.log(name + 'left the screen');
  };
  return (
    <div className='datingCards'>
      <div className='tinderCards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: 'url(' + person.url + ')' }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default DatingCards;
