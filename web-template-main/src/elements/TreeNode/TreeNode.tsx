import React, {useEffect, useRef, useState} from 'react';
import './TreeNode.scss'
import ColumnElement from "../ColumnElement/ColumnElement";
import DirectoryIcon from "../../images/DirectoryIcon";
import {TreeNodeData} from "../../types";
import TrashFillIcon from "../../images/TrashFillIcon";

interface TreeNodeProps {
    node: TreeNodeData;
    level: number;
    onUpdateNode: (updatedNode: TreeNodeData) => void;
    onCreateNode: (parentNode: TreeNodeData) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, level, onUpdateNode, onCreateNode }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValues, setEditValues] = useState<TreeNodeData>(node);
    const detailsRef = useRef<HTMLDetailsElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setEditValues(node);
    }, [node]);

    const handleDoubleClick = () => {
        setIsEditing(true);
        if (detailsRef.current) {
            detailsRef.current.classList.add('editing');
            detailsRef.current.open = true;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleBlur = () => {
        setTimeout(() => {
            if (formRef.current && !formRef.current.contains(document.activeElement)) {
                saveAndClose();
            }
        }, 0);
    };

    const handleCreateChild = () => {
        onCreateNode(node);
    };

    const saveAndClose = () => {
        if (JSON.stringify(editValues) !== JSON.stringify(node)) {
            onUpdateNode(editValues);
        }
        setIsEditing(false);
        if (detailsRef.current) {
            detailsRef.current.classList.remove('editing');
        }
    };


    const id = localStorage.getItem("id")
    const clickTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
    function handleClickEvent  (id:number) {
        if (clickTimeoutRef.current) {
            clearTimeout(clickTimeoutRef.current);
            clickTimeoutRef.current = null;
            handleDoubleClick();
        } else {
            clickTimeoutRef.current = setTimeout(() => {
               handleCreateChild()
                clickTimeoutRef.current = null;
            }, 200);
        }
    }

    return (
        <li>
            <details ref = {detailsRef} >
                <summary>
                    <div className="summary-images-container">
                        <div className="directory-image-container">
                            <button onClick={() => handleClickEvent(1)}>
                                <DirectoryIcon/>
                            </button>

                        </div>
                        <div className="trash-image-container">
                            <button>
                                <TrashFillIcon/>
                            </button>
                        </div>
                    </div>
                </summary>


                <div className="node-container" style={{
                    marginLeft: `calc(-1 * (2em * ${level} + (8px * ${level})))`,
                    width: `calc(100% + ${level} * (2em + 8px) - 32px)`
                }}>
                    <div onClick={(e) => e.stopPropagation()} ref={formRef}
                         className='node-content' style={{marginLeft: `calc((2em - 32px) * ${level}  + (32px * 4.5) )`}}>

                        {isEditing ?
                            (<>
                                <div>
                                    <input value={editValues.rowName}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           autoFocus/>
                                </div>
                                <div className="content-attribute-container">
                                    <ColumnElement><input
                                        type="text"
                                        name="salary"
                                        value={editValues.salary}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoFocus
                                    /></ColumnElement>
                                    <ColumnElement> <input
                                        type="text"
                                        name="equipmentCosts"
                                        value={editValues.equipmentCosts}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoFocus
                                    /></ColumnElement>
                                    <ColumnElement> <input
                                        type="text"
                                        name="overheads"
                                        value={editValues.overheads}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoFocus
                                    /></ColumnElement>
                                    <ColumnElement><input
                                        type="text"
                                        name="estimatedProfit"
                                        value={editValues.estimatedProfit}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoFocus
                                    /></ColumnElement>
                                </div>
                            </>)
                            :
                            (<>
                                <div>
                                    <span>{editValues.rowName}</span>
                                </div>
                                <div className="content-attribute-container">
                                    <ColumnElement><span>{editValues.salary}</span></ColumnElement>
                                    <ColumnElement>{editValues.equipmentCosts}</ColumnElement>
                                    <ColumnElement>{editValues.overheads}</ColumnElement>
                                    <ColumnElement>{editValues.estimatedProfit}</ColumnElement>
                                </div>
                            </>)
                        }
                    </div>
                </div>
                {node.child && node.child.length > 0 && (
                    <ul className="child">
                        {node.child.map((child, index) => (
                            <TreeNode node={child} level={level + 1} onUpdateNode={onUpdateNode} onCreateNode={onCreateNode}/>
                        ))}
                    </ul>
                )}
            </details>
        </li>


    );
};

{/*
                (
                    <>
                        <button onClick={() => createFirstRowHandler()}>
                            Create First Row
                        </button>
                    </>
                )}
            */
}
export default TreeNode;