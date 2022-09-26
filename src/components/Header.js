import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    //for nav bar we will use nav link and activeClassName adds the class to the navLink and exact set as true to the root will help avoiding the duplicate style applied to the navLinks
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeclassname='is-active' exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeclassname='is-active'>Create Expense</NavLink>
    </header>
);

export default Header;