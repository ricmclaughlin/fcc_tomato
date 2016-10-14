import React from 'react'
import Settings from '../components/settings'

export default function Controls (){
  return (
    <div className="row settings">
      <div className="col-md-3"></div>
      <div className="col-md-3">
        <Settings value={5}/>
      </div>
      <div className="col-md-3">
        <Settings value={25}/>
      </div>
      <div className="col-md-3"></div>
    </div>
  )
}