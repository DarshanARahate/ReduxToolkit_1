import { useEffect, useState } from 'react'
import './App.css'

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount, multiply, divide } from './features/counterSlice';
import { addTodo, removeTodo } from './features/todoSlice';

import { fetchUsers } from './features/userSlice';


function App() {

  const count = useSelector((state) => state.counter.value);
  const todos = useSelector((state) => state.todo.todos);
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (todo.trim() === "") return;

    dispatch(addTodo(todo));
    setTodo("");

  };

  return (
    <>
      <div>
        <h1>Counter</h1>
        <h2>Count : {count} </h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+ 5</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>+ 10</button>
        <button onClick={() => dispatch(multiply(2))}> * 2</button>
        <button onClick={() => dispatch(multiply(5))}> * 5</button>
        <button onClick={() => dispatch(divide(2))}> / 2</button>

        <h2>Todo App</h2>
        <input type='text' value={todo} placeholder='Enter Todo' onChange={(e) => setTodo(e.target.value)} />
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

        <h2>Users</h2>

        {loading && <h3>Loading...</h3>}

        { error && (<h3> {error} </h3>) }

        {
          !loading && !error && (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          )}
      </div>
    </>
  );
}

export default App;
