import React, { useState } from 'react'
import CountStyle from '../style/Count.css'


export default function Count() {
  const [clickCount, setClickCount] = useState(0)

  return (
    <div className="container count-box">
      <button
        className='btn btn-success'
        onClick={() => setClickCount(clickCount + 1)}
      >{clickCount}</button>
      
    </div>
  )
}
