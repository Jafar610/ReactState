import React from 'react'
import Component1 from './Components/contextAPI/Component1'
export const myContext = React.createContext()

let obj = {
    name : 'John',
    age : 30,
    email : 'john@example.com'
    }

function App() {
  return (
    <>
     <myContext.Provider value={obj}>
        <Component1 />
     </myContext.Provider>
      
    </>
  )
}

export default App
