import React from 'react'

import classes from './PortfolioScreen.module.css'

function PortfolioScreen() {
  return (
    <>
      <div className={classes.portfolioScreen__container}>
        <div className={classes.portfolioScreen__title}>
          <h1>My projects</h1>
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
    </>
  )
}

export default PortfolioScreen
