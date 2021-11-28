import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import styles from '../styles/Swiper.module.css'


const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://picsum.photos/id/237/200/300'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://picsum.photos/id/237/200/300'
  },
  {
    name: 'Monica Hall',
    url: 'https://picsum.photos/id/237/200/300'
  },
  {
    name: 'Jared Dunn',
    url: 'https://picsum.photos/id/237/200/300'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://picsum.photos/id/237/200/300'
  }
]

function Simple () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('drection', direction)
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>Swiper Card</h1>
      <div className={styles.cardContainer}>
        {characters.map((character) =>
          <TinderCard className={styles.swipe} key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: "url('" + character.url + "')" }} className={styles.card}>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className={styles.infoText}>You swiped {lastDirection}</h2> : <h2 className={styles.infoText} />}
    </div>
  )
}

export default Simple
