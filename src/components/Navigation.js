import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='navBar'>
            <div>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
            </div>
        </nav>
    )
}

export default Navigation
