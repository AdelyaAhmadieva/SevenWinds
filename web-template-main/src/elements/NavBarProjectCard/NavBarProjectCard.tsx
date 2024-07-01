import React, {ReactNode} from 'react';
import './NavBarProjectCard.scss'
import ProjectItemIcon from "../../images/ProjectItemIcon";
interface Props {
    children: React.ReactNode;
}
const NavBarProjectCard: React.FC<Props> = ({children}) => {
    return (
       <div className="card">
            <ProjectItemIcon/>
            <span>{children}</span>
       </div>

    );
};

export default NavBarProjectCard;