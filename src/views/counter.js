import React from 'react'

import {CounterProvider} from '../context/counter'
import CounterDisplay from '../components/counter-display'
import CounterButtons from '../components/counter-buttons'

export  default function(){
  return (
    <CounterProvider>
      <h3> Counter </h3>
      <div>
        <CounterDisplay />
        <CounterButtons />
      </div>
    </CounterProvider>
  )
}
