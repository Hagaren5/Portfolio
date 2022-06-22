import {Fragment} from 'react'

import classes from './AboutMe.module.css'

const AboutMe = () => {
    return <Fragment>
        <div className={classes['title-card']}>
            <h1 className={classes.title}>About me</h1>
        </div>
            <div className={classes['my-history']}>
                <p>I work with Java, Spring Boot and Angular. <br/>
                I also have knowledge of JavaScript and React. <br/>
                Even though I am mainly working at Backend right now, I have decided to study by my own 
                with Frontend languages because I realized that I enjoy them more. <br/>
                I consider myself a very versatile and organized person who can work very well even under 
                pressure.</p>
            </div>   
    </Fragment>
}

export default AboutMe