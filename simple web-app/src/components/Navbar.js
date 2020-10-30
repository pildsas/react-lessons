import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button.js";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener("resize", showButton);

    useEffect(() => {
        showButton();
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
                        Lorem <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu__icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav__menu active" : "nav__menu"}>
                        <li className="nav__item">
                            <Link to="/" className="nav__links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="/services"
                                className="nav__links"
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="/products"
                                className="nav__links"
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="/sing-up"
                                className="nav__links-mobile"
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn__outline">Sign In</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
