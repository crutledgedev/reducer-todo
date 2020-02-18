import React, { useReducer } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { initialState, reducer } from './reducers/reducer';
import Button from '@material-ui/core/Button';

import './App.css';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }
    dispatch({type: "ADD_TODO", payload: newTodo})
  }

  const handleComplete = (id) => {
    dispatch({type:"COMPLETED_TODO", payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED_TODO"})
  }

  return (
    <div className="App">
      <TodoList state={state} handleComplete={handleComplete} />
      <TodoForm addTodo={addTodo} />
      <Button variant="contained" color="secondary" onClick={(e) => {
        e.preventDefault()
        clearCompleted()
      }}>Clear Task</Button>
    </div>
  );
}

export default App;
