
import Component2 from './Component2'
import {ColorContext} from './ThemeContext'
import { useContext } from 'react'

function Component1() {

  const {color, colorToggler} = useContext(ColorContext);

  return (
    <>
    <h1>Current Color: {color} </h1>
    <button onClick={colorToggler}>Change color</button>
    <hr />
    </>
  )
}

export default Component1