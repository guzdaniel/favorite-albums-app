import React from "react";

import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    padding: "1rem 4rem 1rem",
    margin: "0.2rem",
    background: "Black",
    textDecoration: "none",
    color: "lightgreen",
    fontsize: "1.2em"

};


function Navigation() {
    return (
        <nav>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    color: "white",
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/albums"
                exact
                style={linkStyles}
                activeStyle={{
                    color: "white",
                }}
            >
                My Albums
            </NavLink>
            <NavLink
                to="/albums/new"
                exact
                style={linkStyles}
                activeStyle={{
                    color: "white",
                }}
            >
                Add An Album
            </NavLink>
            <hr/>
        </nav>
    );
}

export default Navigation