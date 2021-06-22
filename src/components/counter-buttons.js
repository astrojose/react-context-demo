import React, {useContext} from 'react'

import {CounterContext} from '../context/counter'

export default function CounterButtons(){
  const [count, setCount] = useContext(CounterContext)

  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    setCount(count-1)
  }
  return (
    <div>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  )
}
