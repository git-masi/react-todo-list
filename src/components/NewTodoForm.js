import React, { Component } from 'react';
import './NewTodoForm.css';
  
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
  }

  changeHandler(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label htmlFor="todo"></label>
        <input type="text" name="todo" id="todo" value={this.state.todoText} onChange={this.changeHandler}></input>
        <button>Add Todo</button>
      </form>
    )
  }
}

export default NewTodoForm;