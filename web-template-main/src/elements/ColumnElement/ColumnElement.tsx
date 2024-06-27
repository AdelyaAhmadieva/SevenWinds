import React from 'react';
import './ColumnElement.scss'
interface Props {
    children: React.ReactNode;
}
const ColumnElement: React.FC<Props> = ({ children }) => {
    return (
        <div className="element-container">
           {children}
        </div>
    );
};


export default ColumnElement;