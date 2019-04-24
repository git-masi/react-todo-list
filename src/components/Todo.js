import React, { Component } from 'react';
import './Todo.css';
  
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    }
    this.completeHandler = this.completeHandler.bind(this);
  }

  completeHandler() {
    const toggleComplete = !this.state.complete;
    this.setState({complete: toggleComplete})
  }

  render() {
    return (
      <div className="Todo">
        <span onClick={this.completeHandler} className={this.state.complete ? 'complete' : null}>{this.props.todoText}</span>
        <div>
          <i className="fas fa-pencil-alt"></i>
          <i className="fas fa-trash"></i>
        </div>
      </div>
    )
  }
}

export default Todo;