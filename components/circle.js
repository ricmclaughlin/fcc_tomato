import React from 'react'
import '../circle.css'

export default function Circle (){
  return (
    <div className="row circle">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="c100 p50 big center">
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