import React,{useContext} from 'react'
import { ColorContext } from './ThemeContext';
import Component3 from './Component3'

function Component2() {
  const { color } = useContext(ColorContext);
  return (
    <>
    <div className={color}>
      <h1>Component2</h1>
    </div>
    </>
  )
}

export default Component2