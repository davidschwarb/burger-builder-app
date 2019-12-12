import React from 'react';
import classes from './RarityButton.module.css';

const rarityButton = (props) => {
  return(
    <button onClick={props.clicked} id={props.active ? classes.active : null}>
      {props.children}
    </button>

  )
}

export default rarityButton;