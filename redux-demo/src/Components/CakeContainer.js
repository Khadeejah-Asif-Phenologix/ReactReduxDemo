import React from 'react'
import { connect } from 'react-redux'
import buyCake from '../Redux/Cake/CakeAction'

function CakeContainer(props) {
  return (
    <div>
      <h1>Number of Cakes - {props.numberOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cakes</button>
    </div>
  )
}

const mapStatetoProps = state =>{
  return{
    numberOfCakes : state.numberOfCakes
  }
}

const mapDispatchtoProps = dispatch =>{
  return {
    buyCake : ()=> dispatch(buyCake())
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(CakeContainer)
