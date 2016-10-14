import React from 'react'

export default function Settings({value}){
  return (
    <form className="settings-control">
      <input type='button' value='-' className='qtyminus' />
      <input type='text' name='quantity' value={value} className='qty' />
      <input type='button' value='+'  className='qtyplus' />
    </form>
  )
}