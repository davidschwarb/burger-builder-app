import React from 'react';
import classes from './HamburgerMenu.module.css';

const hamburgerMenu = (props) => (
  <div onClick={props.clicked} className={classes.HamburgerMenu}>
    <span className={classes.Outside}></span>
    <span></span>
    <span className={classes.Outside}></span>
  </div>
)

export default hamburgerMenu