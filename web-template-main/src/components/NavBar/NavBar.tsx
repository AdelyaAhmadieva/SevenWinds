import React from 'react';
import './NavBar.scss'
import NavBarProjectCard from "../../elements/NavBarProjectCard/NavBarProjectCard";
const NavBar = () => {
    return (
        <div className="navbar">
            <NavBarProjectCard/>
        </div>
    );
};

export default NavBar;