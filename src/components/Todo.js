import React, { Component } from 'react';
import './Todo.css';
  
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    }
  }

  render() {
    return (
      <div>{this.props.todoText}</div>
    )
  }
}

export default Todo;