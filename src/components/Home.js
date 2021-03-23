import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='home'>
            <Link to='/pizza-form'>
            <button className="createBtn">
                Build Your Pizza!
            </button>   
            </Link>
        </div>
    )
}

export default Home
