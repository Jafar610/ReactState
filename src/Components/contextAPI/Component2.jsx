import React,{useContext} from 'react'
import { ColorContext } from './ThemeContext';
import Component3 from './Component3'

function Component2() {
  const { color } = useContext(ColorContext);
  return (
    <>
    <div className={color}>
      <h1>Component2</h1>
      <p>This is component 2</p>
      <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut consequatur unde veniam modi facere, temporibus illum tempore saepe explicabo sequi quod deleniti corporis cum adipisci voluptatem debitis cumque, dignissimos rerum laborum neque at. Hic maxime rem porro amet modi nihil soluta eligendi vel quaerat dolor repudiandae, molestiae officia labore consectetur ex cumque eaque fugiat minus ab quod beatae voluptatibus magnam consequatur.</p>
    </div>
    </>
  )
}

export default Component2