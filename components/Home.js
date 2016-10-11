import React, { Component } from 'react'
import { transparentBg } from '../styles'
import { Link } from 'react-router'
import '../main.css'
import '../circle.css'
class Home extends Component {
  render () {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <Title />
        <Controls />
        <Circle />    
      </div>
    )
  }
};

function Title (){
  return (
    <h1>Tomato Timer</h1>
  )
}

function Controls (){
  return (
    <div className="row settings">
      <div className="col-md-3"></div>
      <div className="col-md-3">
        <form className="settings-control">
          <input type='button' value='-' className='qtyminus' />
          <input type='text' name='quantity' value='5' className='qty' />
          <input type='button' value='+' className='qtyplus' />
        </form>
      </div>
      <div className="col-md-3">
        <form className="settings-control">
          <input type='button' value='-' className='qtyminus' />
          <input type='text' name='quantity' value='25' className='qty' />
          <input type='button' value='+' className='qtyplus' />
        </form>
      </div>
      <div className="col-md-3"></div>
    </div>
  )
}

function Circle (){
  return (
    <div className="row circle">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="c100 p50 big">
          <span>5:00</span>
          <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
          </div>
        </div>
      </div>
      
      <div className="col-md-3"></div>
    </div>
  )
}


export default Home
