import React, {useState, createContext} from 'react'

const CounterContext = createContext()

const CounterProvider = props =>{
  const [count,setCount] = useState(0)

  return (
    <CounterContext.Provider value={[count, setCount]}>
      {props.children}
    </CounterContext.Provider>
  )
}

 export {CounterProvider, CounterContext}
