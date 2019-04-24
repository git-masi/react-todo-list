import React, { Component } from 'react';
import './NewTodoForm.css';
import uuid from 'uuidv4';
  
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    const newTodo = {...this.state, id: uuid()}
    this.props.add(newTodo);
    this.setState({text: ''});
  }

  changeHandler(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className="NewTodoForm">
        <label htmlFor="todo">Add Todo:</label>
        <div className="input-button-group">
          <input type="text" name="text" id="todo" value={this.state.text} onChange={this.changeHandler}></input>
          <button><i className="far fa-plus-square"></i></button>
        </div>
      </form>
    )
  }
}

export default NewTodoForm;