import React from 'react';
import { NavLink } from 'react-router-dom';



const Main = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/orders'>Orders</NavLink>
            <NavLink to='/about'>About</NavLink>



        </nav>
    );
};

export default Main;