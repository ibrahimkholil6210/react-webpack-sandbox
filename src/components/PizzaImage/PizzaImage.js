import React from 'react';
import classes from './PizzaImage.module.css';
import pizzaImage from '../../assets/pizza.jpg';

const PizzaImage = (props) => {
    return (
        <div className={classes.PizzaImage}>
            <img src={pizzaImage} />
        </div>
    )
}

export default PizzaImage;