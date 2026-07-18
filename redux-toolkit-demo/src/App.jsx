import { useState } from 'react'
import './App.css'

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount, multiply, divide } from './features/counterSlice';
import { addTodo, removeTodo } from './features/todoSlice';

function App() {

  const count = useSelector((state) => state.counter.value );
  const todos = useSelector((state) => state.todo.todos );
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (todo.trim() === "") return;

    dispatch(addTodo(todo));
    setTodo("");

  };



  return (
    <>
      <div>
        <h1>Counter</h1>
        <h2>Count : { count } </h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+ 5</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>+ 10</button>
        <button onClick={() => dispatch(multiply(2))}> * 2</button>
        <button onClick={() => dispatch(multiply(5))}> * 5</button>
        <button onClick={() => dispatch(divide(2))}> / 2</button>

        <h2>Todo App</h2>
        <input type='text' value={todo} placeholder='Enter Todo' onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {
            todos.map((item, index) => (
              <li key={index} >
                {item}
                <button onClick={() => dispatch(removeTodo(index))}>
                  Delete
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </> 
  )
}

export default App
