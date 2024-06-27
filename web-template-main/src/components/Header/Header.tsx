import React from 'react';
import './Header.scss';
import  "../../images/FeaturesIcon"
import  "../../images/TurnBackIcon"
import FeaturesIcon from "../../images/FeaturesIcon";
import TurnBackIcon from "../../images/TurnBackIcon";
const Header = () => {
    return (
        <header className="header">
            <FeaturesIcon/>
            <TurnBackIcon/>
            <p className="element">Просмотр</p>
            <p className="element">Управление</p>
        </header>
    );
};

export default Header;