import React, { useState } from 'react'
import CountStyle from '../style/Count.css'


export default function Count() {
  const [clickCount, setClickCount] = useState(0)

  return (
    <>
      <div className="count-box">
        <button
          className='count_btn'
          onClick={() => {
            setClickCount(clickCount + 1)
          }}
        >{clickCount}</button>
      </div>
    </>
  )
}
