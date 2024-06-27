import React, {useState} from 'react';
import './TreeNode.scss'
import ColumnElement from "../ColumnElement/ColumnElement";
interface Props {
    level: number;
}
const TreeNode:React.FC<Props> = ({level}) => {
    const margin:number = (3 - level) * 2;
    console.log(margin)
    return (
        <div className="node-container" style={{
                marginLeft: `calc(-1 * (2em * ${level} + (8px * ${level})))`,
            width:`calc(100% + ${level} * (2em + 8px) - 32px)`}}>
            <div className='node-content'
                 style={{marginLeft: `calc((2em - 32px) * ${level}  + (32px * 4.5) )` }}>
                    <div>
                    <span>Южная строительная площадка</span>
                    </div>
                <div className="content-attribute-container">
                        <ColumnElement><span>20 348</span></ColumnElement>
                        <ColumnElement>1750</ColumnElement>
                        <ColumnElement>108,07</ColumnElement>
                        <ColumnElement>20 348</ColumnElement>
                </div>

            </div>

        </div>
    );
};

export default TreeNode;