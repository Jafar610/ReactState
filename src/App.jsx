import React from 'react'
import Component1 from './Components/contextAPI/Component1'
export const myContext = React.createContext()

function App() {
  return (
    <>
     <myContext.Provider value={ 'Hello class'}>
        <Component1 />
     </myContext.Provider>
      
    </>
  )
}

export default App
