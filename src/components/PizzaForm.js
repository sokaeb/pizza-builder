import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../contexts/PizzaContext';

const PizzaForm = () => {
    const { formValues, inputChange, checkboxChange, addPizza } = useContext(PizzaContext);

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
    };

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    };

    const addPizzaToCart = evt => {
        evt.preventDefault()
        const pizza = {
            name: formValues.name.trim(),
            size: formValues.size,
            sauce: formValues.sauce,
            crust: formValues.crust,
            cheese: formValues.cheese,
            meats: formValues.meats,
            veggies: formValues.veggies,
            specialInstructions: formValues.specialInstructions.trim(),
            id: Date.now()
          }
            addPizza(pizza)
    }

    return (
        <form className='pizzaForm displayBg' onSubmit={addPizzaToCart}>
            <h2>
                Build Your Pizza
            </h2>
            <div className='pizzaOptions'>
                <div className='pizzaLabel'>
                    <label htmlFor="nameLabel" value={formValues.name}>Your Name&nbsp;</label>
                    <input 
                        name='name'
                        type='text'
                        onChange={onInputChange}
                        value={formValues.name}
                        id="nameLabel"
                    />
                </div>
                <div className='pizzaLabel'>
                    <label htmlFor="sizeLabel" value={formValues.size}>Select a Size</label>
                    <select
                        name='size'
                        onChange={onInputChange}
                        value={formValues.size}
                        id="sizeLabel"
                    >
                        <option value=''>- Select a Size -</option>
                        <option value={formValues.size.sm}>{formValues.size.sm}</option>
                        <option value={formValues.size.md}>{formValues.size.md}</option>
                        <option value={formValues.size.lg}>{formValues.size.lg}</option>
                        <option value={formValues.size.xl}>{formValues.size.xl}</option>
                    </select>
                </div>
                <div className='pizzaLabel'>
                <label htmlFor="sauceLabel" value={formValues.sauce}>Select a Sauce</label>
                    <select
                        name='sauce'
                        onChange={onInputChange}
                        value={formValues.sauce}
                        id="sauceLabel"
                    >
                        <option value=''>- Select a Sauce -</option>
                        <option value={formValues.sauce.tomato}>{formValues.sauce.tomato}</option>
                        <option value={formValues.sauce.garlic}>{formValues.sauce.garlic}</option>
                        <option value={formValues.sauce.pesto}>{formValues.sauce.pesto}</option>
                    </select>
                </div>
                <div className='pizzaLabel'>
                    <label htmlFor="cheeseLabel" value={formValues.cheese}>Select a Cheese Preference</label>
                    <select
                        name='cheese'
                        onChange={onInputChange}
                        value={formValues.cheese}
                        id="cheeseLabel"
                    >
                        <option value=''>- Select a Cheese Preference -</option>
                        <option value={formValues.cheese.normal}>{formValues.cheese.normal}</option>
                        <option value={formValues.cheese.light}>{formValues.cheese.light}</option>
                        <option value={formValues.cheese.extra}>{formValues.cheese.extra}</option>
                    </select>
                </div>
                <div className='pizzaLabel'>
                <label htmlFor="crustLabel" value={formValues.name}>Select a Crust</label>
                    <select
                        name='crust'
                        onChange={onInputChange}
                        value={formValues.crust}
                        id="crustLabel"
                    >
                        <option value=''>- Select a Crust -</option>
                        <option value={formValues.crust.hand}>{formValues.crust.hand}</option>
                        <option value={formValues.crust.thin}>{formValues.crust.thin}</option>
                    </select>
                </div>

                <div className='pizzaLabel tops'>
                    <div className='toppings'>
                        <h3>Meats:</h3>
                        <div className="toppingName">
                        {formValues.meats.map((meat, index) => {
                            return (
                                <div key={index}>
                                    <label htmlFor={meat.id} value={meat.name}>{meat.name}</label>
                                    <input
                                    name={meat.name}
                                    type={meat.type}
                                    checked={meat.checked}
                                    onChange={onCheckboxChange}
                                    id={meat.id}
                                    key={meat.id}
                                    />
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div className='toppings'>
                        <h3>Veggies:</h3>
                        <div className="toppingName">
                        {formValues.veggies.map((veg, index) => {
                                return (
                                    <div key={index}>
                                        <label htmlFor={veg.id} value={veg.name}>{veg.name}</label>
                                        <input
                                        name={veg.name}
                                        type={veg.type}
                                        checked={veg.checked}
                                        onChange={onCheckboxChange}
                                        id={veg.id}
                                        key={veg.id}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='pizzaLabel'>
                    <label htmlFor="specLabel" value={formValues.specialInstructions}>Special Instructions&nbsp;</label>
                    <textarea
                        name='specialInstructions'
                        type='text'
                        onChange={onInputChange}
                        value={formValues.specialInstructions}
                        placeholder="Any special instructions?"
                        rows="3"
                        cols="20"
                        id="specLabel"
                    ></textarea>
                </div>
            </div>
            <div className="pizzaFormBtns">
                <button>Add to Cart</button>
                <Link to="/cart"><button>Go to Cart</button></Link>
            </div>
        </form>
    )
}

export default PizzaForm
