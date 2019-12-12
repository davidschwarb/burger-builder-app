import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import BuildControlRarity from './BuildControlRarity/BuildControlRarity';
import classes from './BuildControls.module.css';

const controls = [
  {label: 'Lettuce', type:'lettuce'},
  {label: 'Vegan', type: 'vegan'},
  {label: 'Bacon', type:'bacon'},
  {label: 'Cheese', type:'cheese'},
  {label: 'Meat', type:'meat'},
];


const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>${props.purchasable ? props.price.toFixed(2) : (0).toFixed(2) }</strong></p>
    {controls.map((ctrl) => (
      <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <BuildControlRarity cookingLevel={props.cookingLevel} clicked={props.rarityClicked}/>
    <button 
      disabled={!props.purchasable} 
      className={classes.OrderButton}
      onClick={props.ordered}
    >ORDER NOW</button>
  </div>
);

export default buildControls;