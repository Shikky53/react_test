import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact="true" to="/" className={(navData) => navData.isActive ? "nav-active" : ""}>Accueil</NavLink>
            <NavLink exact="true" to="/apropos" className={(navData) => navData.isActive ? "nav-active" : ""}>À propos</NavLink>
            <NavLink exact="true" to="/helloexo" className={(navData) => navData.isActive ? "nav-active" : ""}>Exo1</NavLink>
        </div>
    );
};

export default Navigation;
