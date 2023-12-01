import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import colorPickerOptions from '../ColorPicker/ColorPickerOptions';
import TodoList from 'components/TodoList';

import FormNew from 'components/FormNew/FormNew';
import TodoEditor from '../TodoEditor/TodoEditor';
import initialTodos from '../../todos.json';
import Filter from '../Filter/Filter';
import { Container } from './App.styled';



class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    inputValue: '',
    
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
    console.log(data);
   
  };



 
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  
   
  render() {
    const {  todos, filter } = this.state;
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
      
      <Container>
        <ColorPicker options={colorPickerOptions} />
        <Dropdown />
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <h1>Состояние компонента</h1>
         <div>
          <span>Общее количество todo:{totalTodoCount}</span>
          <span>Кількість виконаних: {completedTodosCount}</span>
        </div>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        <Counter initialValue={10} />
        <FormNew onSubmit={this.formSubmitHandler}/>
       
        {/* <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} /> */}
      </Container>
    );
  }
}

export default App;
