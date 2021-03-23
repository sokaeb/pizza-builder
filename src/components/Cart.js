import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';

const Cart = () => {
    const { cart, removePizza } = useContext(CartContext)

    const getCartTotal = () => {
        let price = 0
        cart.map(obj => {
           if(obj.size === 'extra-large- $25'){
                price += 25
           }
           else if(obj.size === 'large- $20'){
                price += 20
           }
           else if(obj.size === 'medium- $15'){
               price += 15
           } else {
               price += 10
           }
        })
       return price
    }

    return (
        <div className='cart displayBg'>
            <h2>Your Cart</h2>
            <div className='cartDiv'>
                {cart.map(pizza => (
                    <CartItem key={pizza.id} pizza={pizza} removePizza={removePizza} />
                ))}
            </div>
            <p>Total: ${getCartTotal()}</p>
            <button className='checkoutBtn'>Checkout</button>
        </div>
    )
}

export default Cart
