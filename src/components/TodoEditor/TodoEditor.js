import React, { Component } from 'react';
import { TodoForm } from './TodoEditor.styled';

class TodoEditor extends Component {
  state = {
    message: '',
  };
  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <TodoForm>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea>
          <button type="submit" className="TodoEditor___button">
            Добавить
          </button>
        </form>
      </TodoForm>
    );
  }
}

export default TodoEditor;
