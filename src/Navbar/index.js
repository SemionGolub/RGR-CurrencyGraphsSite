import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink className={"button-home"} to="/" activeStyle>
                    MoneyTree
                </NavLink>
                <NavMenu className={""}>

                    <NavLink className={"MenuNames"} to="/News" activeStyle>
                        Новости
                    </NavLink>
                    <NavLink className={"MenuNames"} to="/Crypto" activeStyle>
                        Криптовалюта
                    </NavLink>
                    <NavLink className={"MenuNames"} to="/Currency" activeStyle>
                        Валюта
                    </NavLink>
                    <NavLink className={"MenuNames"} to="/Calculator" activeStyle>
                        Калькулятор
                    </NavLink>
                    <NavLink className="button-icon-cabinet" to="/PersonalCabinet" activeStyle>

                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;