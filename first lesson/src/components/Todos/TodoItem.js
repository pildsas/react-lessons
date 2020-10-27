import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
    getTextDecoration = () => {
        return {
            textDecoration: this.props.todo.completed ? "line-through" : "",
        };
    };

    render() {
        const { id, title } = this.props.todo;
        return (
            <div>
                <div style={itemStyle}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    <div style={this.getTextDecoration()}>{title}</div>
                    <i onClick={this.props.delTodo.bind(this, id)} style={icon__delete} className="fas fa-trash"></i>
                </div>
            </div>
        );
    }
}

const itemStyle = {
    display: "grid",
    gridTemplateColumns: "30px 1fr 50px",
    alignItems: "center",
    borderRadius: "50px",
    fontSize: "0.9rem",
    background: "#c4c4c4",
    padding: "15px",
    margin: "15px 0px",
    width: "100%",
    position: "relative",
    background: "linear-gradient(315deg, #d7dde0, #ffffff)",
    boxShadow: "8px 8px 4px #c5ced2, -1px -1px 1px #ffffff",
};

const icon__delete = {
    padding: "10px",
    borderRadius: "50px",
    border: "none",
    color: "#40739e",
    background: "#535c68",
    position: "absolute",
    right: "15px",
    background: "none",
    boxShadow: "inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73",
    cursor: "pointer",
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
};
