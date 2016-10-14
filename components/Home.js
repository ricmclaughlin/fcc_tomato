import React, { Component } from 'react'
import { transparentBg } from '../styles'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

import Circle from './circle'
import Title from './title'
import Controls from '../containers/controls'

import '../main.css'

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



export default Home
