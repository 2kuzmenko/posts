import React from 'react';
import { connect } from 'react-redux';

import {
  ADD_TODO, REMOVE, MARK_DONE
} from '../constants/index';

/*

    Задание:
    Написать простой ToDo list, у которого есть возможность:
    - Добавить запись
    - Удалить запись
    - Отметить запись выполненной

    + бонус.
    Должно быть 3 роута которые показывают:
      1. Все записи
      2. Выполненные записи
      3. Не выполненные записи

    Все это с использованием Redux.

*/


class Todo extends React.Component {

  state = {
    newTodo : '',
    done: false
  };

  handleInput = (e) => {
    this.setState ({newTodo: e.target.value });
  }

  handleMarkDone = () => {
      this.setState ({done : true});
  }

  render() {
    const {todos} = this.props;
    
    return (
      <div className="todo">

          <label>Add new todo</label>
          <input 
            type='text' 
            placeholder='put todo text...'
            onChange = {this.handleInput}></input>
          <button onClick={this.props.addTodo(this.state.newTodo)}>add</button>
          <div className='todosList'>
          { todos.length && todos.map((item, index) => {
              console.log(item);
              return (
                <div>
                    <div className={ this.state.done ? "red" : null } key={index}>{item}</div>
                    <label>check as done</label>
                    <input onChange={this.handleMarkDone} type='checkbox'/>

                    <label>remove</label>
                    <input onChange={this.props.remove(item)} type='checkbox'/>

                </div>
            )
          })} 
          </div>
      </div>
    );
  }
}

/* REDUX */

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addTodo: (value) => (e) => {
    dispatch({
      type: ADD_TODO,
      payload: value
    })
  },

  remove: (value) => (e) => {
      dispatch({
          type: REMOVE,
          payload: value
      })
  },

  markAsDone: () => {
      dispatch({
          type: MARK_DONE
      })
  }

});

const ConnectedTodo = connect(mapStateToProps, mapDispatchToProps) (Todo);

export default ConnectedTodo;
