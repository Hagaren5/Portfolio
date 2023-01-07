import React from 'react'
import classes from './LandingScreen.module.scss'

function LandingScreen() {
  return (
    <div className={classes.landingScreen}>
      <div className={classes.landingScreen__container}>
        <img
          className={classes.landingScreen__pkmn}
          src="http://fc00.deviantart.net/fs70/i/2012/308/0/b/__hd___pokemon_logo___hd___by_peetzaahhh2010-d5k08gz.png"
        />
        <div className={classes.landingScreen__scrollingWordsContainer}>
          <span>Hello, I'm: </span>
          <div className={classes.landingScreen__scrollingWordsBox}>
            <ul>
              <li>Oriol Sepúlveda</li>
              <li>Fullstack Web Developer</li>
              <li>Gamer</li>
              <li>Poke Master</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingScreen
