import React, { useEffect } from 'react'
import { useState } from 'react';
import './App.css'

function App() {
  // const name=
  const [count,setCount]=useState(()=>{
    return parseInt(localStorage.getItem('counter') )||0;
  })
  useEffect(()=>{
    localStorage.setItem('counter',count)
  },[count])

  const IncrseValue=()=>{
    setCount(count+1)
    // setCount(count=>count+2)
  }
  const DecreasValue=()=>{
    setCount(count-1)
    // setCount(count=>count+2)
  }
  const Reset=()=>{
    setCount(0)
    // setCount(count=>count+2)
  }
  return (
    <div className='home'>
      <h1>  {count}</h1>
    <div className='btns'>
      <button onClick={DecreasValue}>-</button>
      <button onClick={Reset}>Rst</button>
    </div>
    <button className='block' onClick={IncrseValue}>+</button>
    </div>
  )
}

export default App