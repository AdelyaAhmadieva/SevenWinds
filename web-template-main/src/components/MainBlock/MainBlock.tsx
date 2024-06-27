import React from 'react';
import "./MainBlock.scss"
import DirectoryTree from "../../elements/DirectoryTree/DirectoryTree";
import ColumnElement from "../../elements/ColumnElement/ColumnElement";
const MainBlock = () => {
    return (

        <div className="main-block">
            <div className="heading-block"></div>
            <div className="row-names-container">

                <div style={{gap:"5em"}}>
                    <span>Уровень</span>
                    <span>Наименование работ</span>
                </div>
                <div className="project-attributes-container">
                    <ColumnElement>Основная з/п</ColumnElement>
                    <ColumnElement>Оборудование</ColumnElement>
                    <ColumnElement>Накладные расходы</ColumnElement>
                    <ColumnElement>Сметная прибыль</ColumnElement>
                </div>
            </div>

            <DirectoryTree/>
        </div>

    );
};

export default MainBlock;