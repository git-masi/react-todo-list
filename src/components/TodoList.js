import React, { Component } from 'react';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {text: 'buy eggs', id: "test1"},
        {text: 'walk dog', id: "test2"},
        {text: 'wash car', id: "test3"}
      ]
    }
    this.addTodo = this.addTodo.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(todoObj) {
    this.setState({todoList: [...this.state.todoList, todoObj]});
  }

  deleteHandler(todoID) {
    this.setState({todoList: this.state.todoList.filter(todo => todo.id !== todoID)});
  }

  updateTodo(id, text) {
    const updateState = this.state.todoList.map(todo => {
      if (todo.id === id) {
        return {...todo, text: text};
      } else {
        return todo;
      }
    });
    this.setState({todoList: updateState});
  }

  render() {
    const todos = this.state.todoList.map(todo => {
        return (
          <Todo
            todoText={todo.text}
            key={todo.id}
            id={todo.id}
            delete={this.deleteHandler}
            update={this.updateTodo}
          />
        )
      }
    );

    return (
      <div className="TodoList">
        <NewTodoForm add={this.addTodo}/>
        {todos}
      </div>
    )
  }
}

export default TodoList;