import React from 'react'
import classes from './AboutMeScreen.module.scss'
import Oriol from '../img/oriol.jpeg'

function AboutMeScreen() {
  return (
    <div className={classes.AboutMeScreen__background}>
      <div className={classes.AboutMeScreen__explanation}>
      <h1> Who am I? </h1>
      <p className={classes.AboutMeScreen__iam}>
        I am a Fullstack web developer with 1 year of experience. I am a very proactive person eager to learn, very good
        teamworker, I am meticulous and work well under pressure since I have worked as an accountant with over 35
        companies. I am looking for a stimulating work environment that allows me to develop and learn.
      </p>
      </div>
      <div>
        <img src={Oriol} className={classes.AboutMeScreen__picture}/>
      </div>
    </div>
  )
}

export default AboutMeScreen
