import React, {useContext} from 'react'
import { myContext } from '../../App'
function Component3() {
  const value = useContext(myContext);
  const data  = useContext(myContext);
  return (
    <>
    <h1>Greating</h1>
    <h2>{value}</h2>
    <h2>{data}</h2>
    </>
  )
}

export default Component3