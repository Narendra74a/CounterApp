import React, { useEffect } from 'react'
import { useState } from 'react'

function App() {
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
    <div>
      <h1>Count :{count}</h1>
      <button onClick={IncrseValue}>+</button>
      <button onClick={DecreasValue}>-</button>
      <button onClick={Reset}>Rset</button>
    </div>
  )
}

export default App