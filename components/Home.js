import React, { Component } from 'react'
import { transparentBg } from '../styles'
import { Link } from 'react-router'

class Home extends Component {
  render () {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>My New Fancy App</h1>
        <p className="lead">Some Fancy Motto</p>
        <Link to="/#">
          <button className="btn btn-lg btn-success" type="button">Get Started</button>
        </Link>
      </div>
    )
  }
};
export default Home
