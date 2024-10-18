import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const value=useSelector((state)=> {return state});
    const dispatch=useDispatch();
    console.log(value);
  return (
    <div style={{color:value.color}}>
        
      <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
      <p>{value.value}</p>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
      <button onClick={()=>dispatch({type:"COLOR"})}>Red</button>
      <button>Blue</button>
    </div>
  )
}

export default Counter
