import React from 'react';

const CartItem = (props) => {
    const { pizza, removePizza } = props
   
    return (
        <div className="cartItem">
            <p>{pizza.name}</p>
            <p>{pizza.size}</p>
            <p>{pizza.sauce}</p>
            <p>{pizza.crust}</p>
            <p>{pizza.cheese}</p>
            <div>
                {pizza.meats.map((meat, i) => {
                    // console.log(meat.name)
                    if(meat.name === "checked") {
                    return <p>{meat.name}</p>
                }})}
            </div>

            <p>{pizza.specialInstructions}</p>
            <button onClick={()=>{removePizza(pizza.id)}}>Remove from Cart</button>
        </div>
    )
}

export default CartItem
