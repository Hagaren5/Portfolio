import React from 'react'
import classes from './LandingScreen.module.css'

function LandingScreen() {
  return (
    <div className={classes.landingScreen}>
      <div className={classes.landingScreen__container}>
        <h1 className={classes.landingScreen__title}>
          <span>Hello, I'm </span>
          <span className={classes.landingScreen__pink}>Oriol Sepúlveda. </span>
        </h1>
        <h1 className={classes.landingScreen__position}>I'm a Fullstack web developer.</h1>
      </div>
    </div>
  )
}

export default LandingScreen
