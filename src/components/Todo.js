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
      <div className="Todo">
        {this.props.todoText}
        <div>
          <i class="fas fa-pencil-alt"></i>
          <i class="fas fa-trash"></i>
        </div>
      </div>
    )
  }
}

export default Todo;