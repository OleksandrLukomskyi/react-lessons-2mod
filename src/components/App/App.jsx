import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import colorPickerOptions from '../ColorPicker/ColorPickerOptions';
import TodoList from 'components/TodoList';
import IconButton from 'components/IconButton';
import {ReactComponent as AddIcon} from '../../icons/add.svg' 

import FormNew from 'components/FormNew/FormNew';
import TodoEditor from '../TodoEditor/TodoEditor';
import Modal from 'components/Modal';
import Clock from 'components/Clock';
import Tabs from 'components/Tabs';
// import initialTodos from '../../todos.json';

import tabs from '../../tabs.json';
import Filter from '../Filter/Filter';
// import { Container } from './App.styled';




class App extends Component {
  state = {
    todos: [],
    filter: '',
    inputValue: '',
    showModal: false,
    
  };

 componentDidMount(){
    console.log('App componentDidMount');
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
this.setState({todos: parsedTodos});


    }

    
     }

  componentDidUpdate(prevProps, prevState){
    console.log('App componentDidUpdate');
    // console.log(prevState);
    // console.log(this.state);

    if (this.state.todos !== prevState.todos) {
      console.log('Обновилось поле todos, записую todos в хранилище');
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    if (
      this.state.todos.length > prevState.todos.length && prevState.todos.length !== 0
    ) {
      this.toggleModal();
    }
  }

  

  addTodo = text => {
    console.log(text);
    const todo = { id: nanoid(), text, completed: false };
    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
    // this.toggleModal();
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

 toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }
   
  render() {
    const {  todos, filter, showModal } = this.state;
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
      
      <>
        <ColorPicker options={colorPickerOptions} />
        <Dropdown />
        

       
        <Filter value={filter} onChange={this.changeFilter} />
        <h1>Состояние компонента</h1>
         <div>
          <span>Общее количество todo:{totalTodoCount}</span>
          <span>Кількість виконаних: {completedTodosCount}</span>
        </div>
        <IconButton  onClick={this.toggleModal} aria-label='Добавить todo' >
                <AddIcon width='40' height='40' fill='#fff' />
                </IconButton>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        <Counter initialValue={10} />
        <FormNew onSubmit={this.formSubmitHandler}/>
       
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
              {showModal && <Clock/>}
               <button type='button' onClick={this.toggleModal}>
                Відкрити таймер/Скрити таймер  
              </button>
                <Tabs items={tabs} />
               
               
               
               <button type='button' onClick={this.toggleModal}>
                Відкрити модалку
                </button> 
                 {showModal && (
                <Modal onClose={this.toggleModal}> <TodoEditor onSubmit={this.addTodo} />
                  <h1>Привіт це контент модалки як children </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel hic quidem nobis suscipit, laborum sint architecto culpa ab sunt repellat et quasi error dicta doloribus nostrum provident assumenda deserunt.</p>
                 <button type='button' onClick={this.toggleModal}>Закрити</button>
                  </Modal>)}
                  
        
      </>
    );
  }
}

export default App;
