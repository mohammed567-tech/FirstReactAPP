import React from 'react';
import pizzaData from './data';
import Pizza from './pizza';

function Menu () {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizza = pizzas.length
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            {numPizza > 0 ? (
                <ul className="pizzas">
                {pizzaData.map( (pizza)=>
                <Pizza pizzaobj={pizza}  key={pizza.name}/>
                )}
            </ul>
            ) : null }
            
        </main>
    );
}

export default Menu;
