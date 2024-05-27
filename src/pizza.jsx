import React from 'react';

const Pizza = ({pizzaobj}) => {
    // console.log(props)
    // if (pizzaobj.soldOut) return null
    return (
        <div className={`pizza${pizzaobj.soldOut ? " sold-out" : ''}`}>
            <img src={pizzaobj.photoName} alt= {pizzaobj.name}/>
            <div>
                <h3>{pizzaobj.name}</h3>
                <p>{pizzaobj.ingredients}</p>
                <span>{pizzaobj.soldOut ? "Sold Out" : pizzaobj.price + " $"} </span>
            </div>
        </div>
    );
}

export default Pizza;
