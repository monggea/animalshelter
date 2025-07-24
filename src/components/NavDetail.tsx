import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface MenuProps{
    menuId:string;
    title:string;
    menus:{label:string, to:string}[];
}

const NavDetail: React.FC<MenuProps> = ({title, menus, menuId}) => {
    
    return(
        <NavDropdown
        id={menuId}
        title={title}
        className="nav-default">

            {menus.map(({ label, to }, i) => (

            <NavDropdown.Item
                key={i} href={to}
                className="nav-small"
                >{label}
            </NavDropdown.Item>
            
            ))}

        </NavDropdown>
    )
}

export default NavDetail;