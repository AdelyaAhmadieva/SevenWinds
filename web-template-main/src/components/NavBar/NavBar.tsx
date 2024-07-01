import React from 'react';
import './NavBar.scss'
import NavBarProjectCard from "../../elements/NavBarProjectCard/NavBarProjectCard";
import ArrowIcon from "../../images/ArrowIcon";
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="nav-container">
                <div>
                    <span className="main-text">Название проекта</span>
                    <span className="secondary-text">Аббревиатура</span>
                </div>
                <ArrowIcon/>
            </div>
            <NavBarProjectCard children="По проекту"/>
            <NavBarProjectCard children="Обьекты"/>
            <NavBarProjectCard children="РД"/>
            <NavBarProjectCard children="МТО"/>
            <NavBarProjectCard children="СМР"/>
            <NavBarProjectCard children="График"/>
            <NavBarProjectCard children="МиМ"/>
            <NavBarProjectCard children="Рабочие"/>
            <NavBarProjectCard children="Капвложения"/>
            <NavBarProjectCard children="Бюджет"/>
            <NavBarProjectCard children="Финансирование"/>
            <NavBarProjectCard children="Панорамы"/>
            <NavBarProjectCard children="Камеры"/>
            <NavBarProjectCard children="Поручения"/>
            <NavBarProjectCard children="Контрагенты"/>
        </div>
    );
};

export default NavBar;