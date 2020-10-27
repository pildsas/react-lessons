import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header.js";
import Todos from "./components/Todos/Todos.js";
import AddTodo from "./components/Todos/AddTodo.js";
import { v4 as uuid } from "uuid";
import axios from "axios";

import "./App.css";

export default class App extends Component {
    state = {
        todos: [],
    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((res) => {
            this.setState({ todos: res.data });
        });
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        });
    };

    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
            this.setState({
                todos: [...this.state.todos.filter((todo) => todo.id !== id)],
            });
        });
    };

    AddTodo = (title) => {
        axios
            .post("https://jsonplaceholder.typicode.com/todos", {
                title,
                completed: false,
            })
            .then((res) => {
                this.setState({
                    todos: [
                        ...this.state.todos,
                        {
                            title: res.data.title,
                            id: uuid(),
                            completed: false,
                        },
                    ],
                });
            });
    };

    render() {
        return (
            <Router>
                <div className="container">
                    <Header />
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <React.Fragment>
                                <AddTodo AddTodo={this.AddTodo} />
                                <Todos
                                    todos={this.state.todos}
                                    markComplete={this.markComplete}
                                    delTodo={this.delTodo}
                                />
                            </React.Fragment>
                        )}
                    />
                </div>
            </Router>
        );
    }
}
