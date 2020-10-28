import React, { Component } from "react";

export default class AddTodo extends Component {
    state = {
        title: "",
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({ title: "" });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} style={formTodo}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add Todo"
                    style={inputTodo}
                    autoComplete="off"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input type="submit" value="Submit" className="btn__submit" style={submitTodo} />
            </form>
        );
    }
}

const formTodo = {
    display: "flex",
    margin: "10px 0px",
    justifyContent: "space-between",
    border: "none",
    width: "100%",
    borderRadius: "50px",
    background: "none",
    boxShadow: "inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73",
    overflow: " hidden",
};

const inputTodo = {
    background: "none",
    outline: "none",
    border: "none",
    height: "45px",
    padding: "0px 20px",
    fontFamily: "Montserrat, sans-serif",
};

const submitTodo = {
    height: "45px",
    border: "none",
    padding: "10px",
    outline: "none",
    color: "#fff",
    cursor: "pointer",
    textTransform: "uppercase",
    width: "100px",
    background: "linear-gradient(225deg, rgba(200, 214, 229, 1) 0%, rgba(149, 175, 192, 1) 100%)",
    boxShadow: "3px 3px 8px #afb4b6, -1px -1px 4px #ffffff",
};
