import React, { Component } from 'react';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {text: 'buy eggs'},
        {text: 'walk dog'},
        {text: 'wash car'}
      ]
    }
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todoObj) {
    this.setState({todoList: [...this.state.todoList, todoObj]})
  }

  render() {
    const todos = this.state.todoList.map(todo => <Todo todoText={todo.text}/>);

    return (
      <div className="TodoList">
        <NewTodoForm add={this.addTodo}/>
        {todos}
      </div>
    )
  }
}

export default TodoList;