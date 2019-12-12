import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case ('meat'):
        switch (this.props.cookingLevel) {
          case 'rare':
            ingredient = <div className={classes.MeatRare}></div>;
            break;
          case 'well':
            ingredient = <div className={classes.MeatWell}></div>
            break;
          case 'medium':
            ingredient = <div className={classes.MeatMedium}></div>
            break;
          default:
            ingredient = <div className={classes.MeatMedium}></div>;
        }
        break;
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case ('lettuce'):
        ingredient = <div className={classes.Lettuce}></div>;
        break;
      case ('bacon'):
        switch(this.props.cookingLevel) {
          case 'rare':
            ingredient = <div className={classes.BaconRare}></div>;
            break;
          case 'medium':
            ingredient = <div className={classes.BaconMedium}></div>;
            break;
          case 'well':
            ingredient = <div className={classes.BaconWell}></div>
            break;
          default:
            ingredient = <div className={classes.BaconMedium}></div>
        }
        break;
        case ('vegan'):
          ingredient = <div className={classes.Vegan}></div>
          break;
      default:
        ingredient = null;
    }
  return ingredient;
  };
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient;