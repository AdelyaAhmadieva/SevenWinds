import React, {useEffect} from 'react';
import './DirectoryTree.scss'
import TreeNode from "../TreeNode/TreeNode";
import { TreeNodeData } from '../../types';

interface DirectoryTreeProps {
    rows: TreeNodeData[];
    onUpdateNode: (updatedNode: TreeNodeData) => void;
    onCreateNode: (parentNode: TreeNodeData) => void;
}

const DirectoryTree: React.FC<DirectoryTreeProps> = ({ rows, onUpdateNode, onCreateNode }) => {
    return (
        <div className="directoryTree">
            <ul className="root-item">
                {rows?.map((row) => (
                    <TreeNode key={row.id} level={1} node={row} onUpdateNode={onUpdateNode} onCreateNode={onCreateNode} />
                ))}
            </ul>
        </div>
    );
};

export default DirectoryTree;