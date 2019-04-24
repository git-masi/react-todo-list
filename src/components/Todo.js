import React, { Component } from 'react';
import './Todo.css';
  
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      edit: false,
      text: this.props.todoText
    }
    this.completeHandler = this.completeHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.enterKeyHandler = this.enterKeyHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  completeHandler() {
    const toggleComplete = !this.state.complete;
    this.setState({complete: toggleComplete})
  }

  editHandler(e) {
    const toggleEdit = !this.state.edit;
    this.setState({edit: toggleEdit});
    if (toggleEdit === false) this.updateHandler(e);
  }

  updateHandler(e) {
    e.preventDefault();
    this.props.update(this.props.id, this.state.text)
  }

  changeHandler(e) {
    this.setState({[e.target.name]: e.target.value}); 
  }

  enterKeyHandler(e) {
    if (e.key === 'Enter') {
      this.setState({edit: false, text: e.target.value});
      this.updateHandler(e);
    }
  }

  deleteHandler() {
    this.props.delete(this.props.id);
  }

  render() {
    return (
      <div className="Todo">
        {/* <form onSubmit={this.props.updateHandler}> */}
          <input
            type="text"
            name="text"
            onChange={this.changeHandler}
            onKeyPress={this.enterKeyHandler}
            value={this.state.text} 
            style={{display: this.state.edit ? 'inline-block' : 'none'}}>
          </input>
        {/* </form> */}
        <span 
          onClick={this.completeHandler}
          className={this.state.complete ? 'complete' : null}
          style={{display: this.state.edit ? 'none' : 'inline-block'}}>
          {this.state.text}
        </span>
        <div>
          <i role="button" onClick={this.editHandler} className="fas fa-pencil-alt"></i>
          <i role="button" onClick={this.deleteHandler}className="fas fa-trash"></i>
        </div>
      </div>
    )
  }
}

export default Todo;