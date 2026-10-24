import React from 'react'
import Component1 from './Components/contextAPI/Component1'
import Component2 from './Components/contextAPI/Component2'
import ThemeContext from './Components/contextAPI/ThemeContext'
import './App.css'
// export const myContext = React.createContext()

// let obj = {
//     name : 'John',
//     age : 30,
//     email : 'john@example.com'
//     }

function App() {
  return (
    <>
     {/* <myContext.Provider value={{name: obj.name, age: obj.age, email: obj.email}}>
        <Component1 />
     </myContext.Provider> */}
      
      <ThemeContext>
        <Component1/>
        <Component2/>
      </ThemeContext>
    </>
  )
}

export default App
