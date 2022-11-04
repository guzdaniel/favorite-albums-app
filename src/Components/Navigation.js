import React from "react";

import { NavLink } from "react-router-dom";



function Navigation() {
    return (
        <nav>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/albums"> Albums </NavLink>
            <NavLink to="/albums/new"> Add An Album </NavLink>
        </nav>
    );
}

export default Navigation