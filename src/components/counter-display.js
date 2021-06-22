import React, {useContext} from 'react'

import {CounterContext} from '../context/counter'

export default function CounterDisplay(){
  const [count] = useContext(CounterContext)

  return (
    <div>
      {count} <br/>
      Counter      
    </div>
  )
}
