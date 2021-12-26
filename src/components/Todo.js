import React, { Component } from "react";
import Form1 from "./Form1";
import List from "./List";
import "./Todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination1 from "./Pagination";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: "",
      filtered: "",
    };
  }
  onChangeHandler = (e, index) => {
    let inputs = this.state.input;
    inputs = e.target.value;
    this.setState({
      input: inputs,
    });
  };

  onAddHandler = () => {
    let input = this.state.input;
    if (!input) {
      return <h1>Please Add some tasks!!</h1>;
    } else {
      let myItem = {
        id: Math.floor(Math.random() * 10) + 1,
        txt: input,
        isEditing: false,
        isCompleted: false,
        oldValues: "",
      };
      let todo = [...this.state.todos, myItem];
      this.setState({
        todos: todo,
        input: "",
      });
    }
  };

  onkeyHandler = (e) => {
    let input = this.state.input;
    if (e.key === "Enter") {
      if (!input) {
        return;
      } else {
        let myItem = {
          id: Math.floor(Math.random() * 10) + 1,
          txt: input,
          isEditing: false,
          isCompleted: false,
          oldValues: "",
        };
        let todo = [...this.state.todos, myItem];
        this.setState({
          todos: todo,
          input: "",
        });
      }
    }
  };

  onDeleteHandler = (id) => {
    let { todos } = this.state;
    this.setState({
      todos: todos.filter((item, index) => index !== id),
    });
  };

  onEditHandler = (index) => {
    let { todos, input } = this.state;
    todos[index].isEditing = true;
    todos[index].oldValues = todos[index].txt;
    // console.log(todos);
    this.setState({
      todos: todos,
    });
  };
  onEditChange = (e, index) => {
    let { todos } = this.state;
    //todos[index].isEditing = false;
    todos[index].oldValues = e.target.value;
    this.setState({
      todos,
    });
  };
  updateHandler = (index) => {
    // console.log("clicked", index);
    let { todos } = this.state;
    todos[index].isEditing = false;
    todos[index].txt = todos[index].oldValues;
    this.setState({
      todos: todos,
    });
  };
  cancelHandler = (index) => {
    let { todos } = this.state;
    todos[index].isEditing = false;
    todos[index].oldValues = todos[index].txt;
    this.setState({
      todos: todos,
    });
  };
  //search function on change
  search = (e) => {
    const value = e.target.value;
    this.setState({
      filtered: value,
    });
  };
  //check handler
  CheckHandler = (index) => {
    const { todos } = this.state;
    todos[index].isCompleted = true;
    console.log(todos);
    this.setState({
      todos: todos,
    });
  };
  //Multidel
  onChkDelHandler = (index) => {
    let { todos } = this.state;
    let updatedList = todos.filter((item) => !item.isCompleted);
    this.setState({
      todos: updatedList,
    });
  };
  //DeleteAll
  onDelAll = () => {
    let { todos } = this.state;
    this.setState({
      todos: [],
    });
  };
  render() {
    const { input, todos, filtered } = this.state;
    //
    //console.log(todos);
    return (
      <Container className="container">
        <header className="text-center text-light ">
          <h1>ToDo List</h1>
          <input
            type="text"
            name="search"
            value={this.state.todos.txt}
            onChange={this.search}
            placeholder="🔍Search ToDo's"
            style={{ float: "right"}}
          />
        </header>
        <Row className="container_form"> 
            <Form1
              input={input}
              todos={todos}
              onChangeHandler={this.onChangeHandler}
              onAddHandler={this.onAddHandler}
              onkeyHandler={this.onkeyHandler}
              onChkDelHandler={this.onChkDelHandler}
              onDelAll={this.onDelAll}
            />
        </Row>
        
        <Row className="list_container">
          {todos
            .sort((a, b) => (a.txt > b.txt ? 1 : -1))
            .filter((todo) => {
              return todo.txt.match(filtered);
            })
            .map((item, index) => {
              if (item.isEditing) {
                return (
                  <div className="displayItem">
                    <input
                      type="text"
                      value={item.oldValues}
                      onChange={(e) => this.onEditChange(e, index)}
                    />
                    <button onClick={() => this.updateHandler(index)}>
                      Update
                    </button>
                    <button onClick={() => this.cancelHandler(index)}>
                      Cancel
                    </button>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="displayItem">
                    <List
                      item={item}
                      index={index}
                      onDeleteHandler={this.onDeleteHandler}
                      onEditHandler={this.onEditHandler}
                      onCheckHandler={this.CheckHandler}
                    />
                  </div>
                );
              }
            })}
        </Row>
      </Container>
    );
  }
}

export default Todo;
