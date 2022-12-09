import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import classes from './NavigationBar.module.css'

function NavigationBar() {
  const location = useLocation()
  return (
    <div className={classes.navigation__header}>
      {location.pathname !== '/' && (
        <NavLink to="/" className={classes.navigation__link}>
          Home
        </NavLink>
      )}

      {location.pathname !== '/aboutme' && (
        <NavLink to="/aboutme" className={classes.navigation__link}>
          About Me
        </NavLink>
      )}
      {location.pathname !== '/portfolio' && (
        <NavLink to="/portfolio" className={classes.navigation__link}>
          Portfolio
        </NavLink>
      )}
      {location.pathname !== '/contact' && (
        <NavLink to="/contact" className={classes.navigation__link}>
          Contact
        </NavLink>
      )}
    </div>
  )
}

export default NavigationBar
