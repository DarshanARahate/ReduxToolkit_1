import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './features/counterSlice';


function App() {

  const count = useSelector((state) => state.counter.value );
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Counter</h1>
        <h2>Count : { count } </h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>

      </div>
    </>
  )
}

export default App
