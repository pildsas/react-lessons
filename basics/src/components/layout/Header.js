import React from "react";

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    );
};

const headerStyle = {
    color: "#000",
    textAlign: "center",
    padding: "10px",
    // background: "linear-gradient(225deg, rgba(200, 214, 229, 1) 0%, rgba(149, 175, 192, 1) 100%)",
    // boxShadow: "4px 4px 10px #afb4b6, -4px -4px 10px #ffffff",
};

export default Header;
