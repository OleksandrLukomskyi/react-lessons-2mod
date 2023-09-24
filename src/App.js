import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import Counter from './components/Counter';
// import Dropdown from 'components/Dropdown';
// import ColorPicker from 'components/ColorPicker/ColorPicker';
import TodoList from './components/TodoList';
import Form from 'components/Form';
import TodoEditor from 'components/TodoEditor/TodoEditor';
import initialTodos from './todos.json';
import Filter from 'components/Filter/Filter';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };
  addTodo = text => {
    console.log(text);
    const todo = { id: nanoid(), text, completed: false };
    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('Нашли той туду який потрібний!');
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };
  formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  // handleNameChange = e => {
  //   this.setState({ name: e.currentTarget.value });
  // };
  // handleTagChange = e => {
  //   this.setState({ tag: e.currentTarget.value });
  // };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleTodos = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div>
        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <h1>Состояние компонента</h1> */}
        {/* <Dr /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Counter initialValue={10} /> */}
        {/* <div>
          <span>Общее количество todo:{totalTodoCount}</span>
          <span>Кількість виконаних: {completedTodosCount}</span>
        </div> */}
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
