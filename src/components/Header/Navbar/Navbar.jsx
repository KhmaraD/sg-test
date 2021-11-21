import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navbar.module.scss";
import "./style.css"

const Navbar = () => {
    const links = [
        {link: "/authorization", linkName: "Authorization"},
        {link: "/requests", linkName: "Requests"},
        {link: "/input", linkName: "Input"},
    ]

    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                {links.map(item =>
                    <li className={style.nav__item} key={item.link}>
                        <NavLink to={item.link}>
                            {item.linkName}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;