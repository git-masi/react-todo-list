import React, { Component } from 'react';
import './NewTodoForm.css';
  
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    }
  }

  render() {
    return (
      <form></form>
    )
  }
}

export default NewTodoForm;