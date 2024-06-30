import React, {useEffect, useState} from 'react';
import "./MainBlock.scss"
import DirectoryTree from "../../elements/DirectoryTree/DirectoryTree";
import ColumnElement from "../../elements/ColumnElement/ColumnElement";
import { TreeNodeData } from '../../types';
import {useGetDataQuery, useUpdateNodeMutation} from "../../api/entityApi";


const MainBlock:React.FC = () => {


    const [serverData, setServerData] = useState<TreeNodeData[]>([]);

    const { data: nodes, error, isLoading } = useGetDataQuery();
    console.log(nodes);
    const [updateNode] = useUpdateNodeMutation();

    const handleUpdateNode = async (updatedNode: TreeNodeData) => {
        try {
            await updateNode(updatedNode).unwrap();
            console.log('Node updated successfully');
        } catch (error) {
            console.error('Failed to update node:', error);
        }
    };




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

            <DirectoryTree rows={nodes} onUpdateNode={handleUpdateNode} />
        </div>

    );
};

export default MainBlock;


{/*
fetch('/api/updateNode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedNode),
        })
            .then((response) => response.json())
            .then((updatedData) => {
                const updateTree = (nodes: TreeNodeData[], updatedNode: TreeNodeData): TreeNodeData[] => {
                    return nodes.map((node) => {
                        if (node.id === updatedNode.id) {
                            return updatedNode;
                        }
                        if (node.child) {
                            return { ...node, child: updateTree(node.child, updatedNode) };
                        }
                        return node;
                    });
                };

                setData((prevData) => updateTree(prevData, updatedNode));
            })
            .catch((error) => {
                console.error('Error updating data on the server', error);
            });
*/}