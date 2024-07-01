import React, {useEffect, useState} from 'react';
import "./MainBlock.scss"
import DirectoryTree from "../../elements/DirectoryTree/DirectoryTree";
import ColumnElement from "../../elements/ColumnElement/ColumnElement";
import { TreeNodeData } from '../../types';
import {
    api,
    useCreateNodeMutation,
    useDeleteNodeMutation,
    useGetDataQuery,
    useUpdateNodeMutation
} from "../../api/entityApi";
import {useDispatch} from "react-redux";
import treeNode from "../../elements/TreeNode/TreeNode";


const MainBlock:React.FC = () => {

    const { data: rows, refetch } = useGetDataQuery();
    const [updateNode] = useUpdateNodeMutation();
    const [createNode] = useCreateNodeMutation();
    const [deleteNode] = useDeleteNodeMutation();
    const [treeData, setTreeData] = useState<TreeNodeData[]>([]);

    // Обновляем состояние при изменении данных в кэше
    useEffect(() => {
        if (rows) {
            setTreeData(rows);
        }
    }, [rows]);

    const handleUpdateNode = async (updatedNode: TreeNodeData) => {
        await updateNode(updatedNode).unwrap();

    };

    const handleCreateNode = async (parentId: number | null) => {
        const newNodeData = {
            equipmentCosts: 0,
            estimatedProfit: 0,
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            overheads: 0,
            parentId: parentId,
            rowName: "New Node",
            salary: 0,
            supportCosts: 0,
        };
        const newNode = await createNode(newNodeData).unwrap();
    };

    const handleDeleteNode = async (nodeId: number) => {
        await deleteNode(nodeId).unwrap();
        refetch();
    };

    return (

        <div className="main-block">
            <div className="heading-block">
                <div>
                    <span>Строительно-монтажные работы</span>
                </div>
            </div>
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
            {treeData !== null && (
                <DirectoryTree rows={treeData} onUpdateNode={handleUpdateNode}
                               onCreateNode={handleCreateNode} onDeleteNode={handleDeleteNode}/>
            )}

            { treeData && !treeData.length &&  (
                <>
                    <button onClick={() => handleCreateNode(null)}>Создать строку</button>
                </>
            )}
        </div>

    );
};

export default MainBlock;

