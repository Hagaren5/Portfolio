import {Fragment} from 'react'

import classes from './Experience.module.css'

const Experience = () => {
    return <Fragment>
        <div className={classes['title-card']}>
            <h1 className={classes.title}>Experience</h1>
        </div>
            <div className={classes['job-position']}>
                <div className={classes['worked-years']}>
                    <h3 className={classes.company}>Mytic Innova</h3>
                    <p className={classes.years}>November 2021 - Now</p>
                </div>
                <h3>Fullstack developer<br/></h3>
                <p> I work with Spring Boot, Java and Angular</p>
            </div>
            <div className={classes['job-position']}>
                <div className={classes['worked-years']}>
                    <h3>Tech Data Europe Services</h3>
                    <p>February 2019 - October 2021</p>
                </div>
                <h3>Accounts payable trade analyst  <br/></h3>
                <p>In charge of different company’s accounts. (Oracle, DELL, EMC, Extreme, 
                        Lenovo)Consultingand modification of DBB, worked and developed on 
                        SAP 6.7 & SAP 4.6.r</p>
            </div>   
    </Fragment>
}

export default Experience