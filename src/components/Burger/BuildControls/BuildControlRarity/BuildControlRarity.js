import React from 'react';
import classes from './BuildControlRarity.module.css';
import RarityButton from './RarityButton/RarityButton';

const buildControlRarity = (props) => (
  <div className={classes.BuildControlRarity}>
    <RarityButton clicked={() => props.clicked('rare')} active={props.cookingLevel === 'rare'}>Rare</RarityButton>
    <RarityButton clicked={() => props.clicked('medium')} active={props.cookingLevel === 'medium'}>Medium</RarityButton>
    <RarityButton clicked={() => props.clicked('well')} active={props.cookingLevel === 'well'}>Well</RarityButton>
  </div>
);

export default buildControlRarity;