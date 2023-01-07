import React from 'react'

import classes from './PortfolioScreen.module.scss'

function PortfolioScreen() {
  return (
    <div className={classes.PortfolioScreen}>
      <div className={classes.portfolioScreen__container}>
        <div className={classes.portfolioScreen__title}>
          <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" />
        </div>
        <div className={classes.portfolioScreen__projects}>
          <div className={classes.portfolioScreen__group}>
            <p className={classes.portfolioScreen__linkName}>Shopping Cart</p>
            <a href="https://shoppingcartoriol.netlify.app/">
              <div className={classes.portfolioScreen__project} />.
            </a>
          </div>
          <div className={classes.portfolioScreen__group}>
            <p className={classes.portfolioScreen__linkName}>Netflix Clone</p>
            <a href="https://netflixcloneoriol.netlify.app/">
              <div className={classes.portfolioScreen__project} />.
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioScreen
