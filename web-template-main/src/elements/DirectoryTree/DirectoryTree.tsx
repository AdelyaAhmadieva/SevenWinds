import React from 'react';
import './DirectoryTree.scss'
import TreeNode from "../TreeNode/TreeNode";
import DirectoryIcon from "../../images/DirectoryIcon";
const DirectoryTree = () => {

    function selectHandler(){
        console.log("Selected directory tree");
    }

    return (
        <div className="directoryTree">
            <ul className="root-item">
                <li>
                    <details>
                            <summary><DirectoryIcon/></summary>
                            <TreeNode level={1}/> {/*Cодержание столбца*/}
                        <ul> {/*Подстолбец*/}
                            <li>
                                <details>
                                    <summary><DirectoryIcon/></summary>
                                    <TreeNode level={2}/>
                                    <ul>
                                        <li>
                                            <details>
                                                <summary><DirectoryIcon/></summary>
                                                <TreeNode level={3}/>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary><DirectoryIcon/></summary>
                                    <ul>
                                        <li>
                                            <details></details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary><DirectoryIcon/></summary>
                                    <ul>
                                        <li>
                                            <details></details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>2 task</summary>
                    </details>
                </li>
            </ul>
        </div>
    );
};

export default DirectoryTree;