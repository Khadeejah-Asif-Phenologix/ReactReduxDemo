import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buyCake from '../Redux/Cake/CakeAction'

function HooksCake() {
  const numberOfCakes = useSelector(state => state.cake.numberOfCakes);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number Of Cakes - {numberOfCakes}</h1>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCake
