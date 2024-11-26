import React from 'react'
import { connect } from 'react-redux'
import buyIcecream from '../Redux/IceCream/IceCreamAction'

function IceCreamContainer(props) {
  return (
    <div>
      <h1>Number of IceCream - {props.numberOfIcecreams}</h1>
      <button onClick={props.buyIcecream}>Buy IceCream</button>
    </div>
  )
}

const mapStatetoProps = state =>{
  return{
    numberOfIcecreams : state.iceCream.numberOfIcecreams
  }
}

const mapDispatchtoProps = dispatch =>{
  return {
    buyIcecream : ()=> dispatch(buyIcecream())
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(IceCreamContainer)
