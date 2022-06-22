import React, {Fragment} from 'react'

import profilePicture from './img/oriol.png'
import linkedinIcon from './img/lkdn.png'
import githubIcon from './img/github.ico'
import mailIcon from './img/mail.png'
import phoneIcon from './img/phone.png'
import classes from './Header.module.css'

const Header = props => {
    return <Fragment>
            <header className={classes.header}>
                <div className={classes.icons}>
                    <div className={classes['module-container']}>
                        <div className={classes.icons}>
                            <img src={linkedinIcon}  className={classes.icon } />
                            <p className={classes['links-titles']}>Oriol Sepúlveda</p>
                        </div>
                        <div className={classes.icons}>
                            <img src={githubIcon}  className={classes.icon } />
                            <p className={classes['links-titles']}>Hagaren5</p>
                        </div>
                    </div>
                    <div className={classes['module-container']}>
                        <div className={classes.icons}>
                            <img src={phoneIcon}  className={classes.icon } />
                            <p className={classes['links-titles']}>+34 611 612 185</p>
                        </div>
                        <div className={classes.icons}>
                            <img src={mailIcon}  className={classes.icon } />
                            <p className={classes['links-titles']}>oriolsm93@gmail.com</p>
                        </div>                       
                    </div>
                </div>
                <div>
                    <img src={profilePicture} className={classes.profilePicture } />
                </div>
   
            </header>
        </Fragment>

}

export default Header