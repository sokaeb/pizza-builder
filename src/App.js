import React, { useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { PizzaContext } from './contexts/PizzaContext';
import { CartContext } from './contexts/CartContext';

import { initialFormValues } from './assets/data';

// Components
import Home from './components/Home';
import Cart from './components/Cart';
import PizzaForm from './components/PizzaForm';

import './App.css';

const App = () => {
  const [ cart, setCart ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialFormValues);

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  };

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      meats: [
        ...formValues.meats.map((meat) => {
          return {
            ...meat,
            [name]: isChecked
          }
        })
      ],
      veggies: [
        ...formValues.veggies.map((veg) => {
          return {
            ...veg,
            [name]: isChecked
          }
        })
      ]
    })
  }

  const addPizza = item => {
    setCart([...cart, item]);
  };

  const removePizza = id => {
    setCart(cart.filter((pizza) => pizza.id !== id));
  };

  return (
    <CartContext.Provider value={{cart, removePizza}}>
      <div className="App header">
        <nav className='navBar'>
              <div className="navLinks">
                  <NavLink className="navItem" exact to='/'>Home</NavLink>
                  <NavLink className="navItem" to='/cart'>Cart
                    <span>{(cart.length > 0) ? cart.length : ''}</span>
                  </NavLink>
              </div>
          </nav>
        <PizzaContext.Provider value={{
          formValues, inputChange, checkboxChange, addPizza
        }}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/cart'>
              <Cart cart={cart} />
            </Route>

            <Route path='/pizza-form'>
              <PizzaForm />
            </Route>
          </Switch>
        </PizzaContext.Provider>
      </div>
    </CartContext.Provider>
  );
}

export default App;
