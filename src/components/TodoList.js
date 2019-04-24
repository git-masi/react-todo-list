import React, { Component } from 'react';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {text: 'this is some text'}
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
      <div>
        <NewTodoForm add={this.addTodo}/>
        {todos}
      </div>
    )
  }
}

export default TodoList;